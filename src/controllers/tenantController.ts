import { Request, Response } from 'express';
import { create, deleteById, findAll, findByDNI, update } from '../services/tenantService';

export const createTenant = async (req: Request, res: Response): Promise<void> => {
    try {
        const newTenant = await create(req.body);
        res.status(201).json(newTenant);
    } catch (error) {
        console.error('Error creating tenant:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getTenants = async (req: Request, res: Response): Promise<void> => {

    try {
        const { ownerID } = req.params
        const tenants = await findAll();
        res.status(200).json(tenants);
    } catch (error) {
        console.error('Error fetching properties:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getTenantByDni = async (req: Request, res: Response): Promise<void> => {
    try {
        const { dni } = req.params;
        const tenant = await findByDNI(Number(dni));
        if (!tenant) {
            res.status(404).json({ message: 'Tenant not found' });
            return;
        }
        res.status(200).json(tenant);
    } catch (error) {
        console.error('Error fetching tenant by DNI:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateTenant = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const updatedTenant = await update(Number(id), req.body);
        if (!updatedTenant) {
            res.status(404).json({ message: 'Property not found' });
            return;
        }
        res.status(200).json(updatedTenant);
    } catch (error) {
        console.error('Error updating property:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


export const deleteTenant = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const tenant = await deleteById(Number(id));
        if (!tenant) {
            res.status(404).json({ message: 'Tenant not found' });
            return;
        }
        res.status(200).json({ message: `Tenant with ID: ${id} deleted succesfully` });
    } catch (error) {
        console.error('Error fetching Tenant by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
