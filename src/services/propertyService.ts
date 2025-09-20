import { AppDataSource } from '../data-source';
import { Property } from '../models/Property';

const propertyRepository = AppDataSource.getRepository(Property);

const findAll = async (): Promise<Property[]> => {
    return propertyRepository.find();
};

const findById = async (id: string): Promise<Property> => {
    return propertyRepository.findOneBy({ id });
}

const create = async (propertyData: Property): Promise<Property> => {
    const property = propertyRepository.create(propertyData);
    return propertyRepository.save(property);
};

const deleteById = async (id: string): Promise<boolean | null> => {
    propertyRepository.delete({ id });
    const result = await propertyRepository.delete({ id });
    if (result.affected === 0) {
        return null;
    }
    return true;
}

export { findAll, findById, create, deleteById }