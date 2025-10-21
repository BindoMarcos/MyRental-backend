import { Request, Response } from 'express'; 
import { create, deleteById, findAll, findById, update } from '../services/propertyService';
 
export const getProperties = async (req: Request, res: Response): Promise<void> => {
  
  try {
    const {ownerID} = req.params
    const properties = await findAll(Number(ownerID));
    res.status(200).json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getPropertyByID = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const property = await findById(Number(id));
    if (!property) {
      res.status(404).json({ message: 'Property not found' });
      return;
    }
    res.status(200).json(property);
  } catch (error) {
    console.error('Error fetching property by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const createProperty = async (req: Request, res: Response): Promise<void> => {
  try {
    const newProperty = await create(req.body);
    res.status(201).json(newProperty);
  } catch (error) {
    console.error('Error creating property:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteProperty = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const property = await deleteById(Number(id));
    if (!property) {
      res.status(404).json({ message: 'Property not found' });
      return;
    }
    res.status(200).json({message: `Property with ID: ${id} deleted succesfully`});
  } catch (error) {
    console.error('Error fetching property by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateProperty = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedProperty = await update(Number(id), req.body);
    if (!updatedProperty) {
      res.status(404).json({ message: 'Property not found' });
      return;
    }
    res.status(200).json(updatedProperty);
  } catch (error) {
    console.error('Error updating property:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
