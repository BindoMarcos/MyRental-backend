// src/controllers/propertyController.ts
import { Request, Response } from 'express'; 
import { create, deleteById, findAll, findById } from '../services/propertyService';
 
export const getProperties = async (req: Request, res: Response): Promise<void> => {
  
  try {
    const properties = await findAll();
    res.status(200).json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getPropertyByID = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const property = await findById(id);
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
    const property = await deleteById(id);
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