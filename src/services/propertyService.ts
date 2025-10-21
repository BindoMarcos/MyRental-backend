import { AppDataSource } from '../data-source';
import { Property } from '../models/Property';
import { User } from '../models/User';

const propertyRepository = AppDataSource.getRepository(Property);

const findAll = async (ownerID: number): Promise<Property[]> => {
    return propertyRepository.findBy(
        {
            owner: {
                id: ownerID
            }
        });
};

const findById = async (id: number): Promise<Property | null> => {
    return propertyRepository.findOneBy({ id });
}

const create = async (propertyData: Property): Promise<Property> => {
    const property = propertyRepository.create(propertyData);
    return propertyRepository.save(property);
};

const deleteById = async (id: number): Promise<boolean | null> => {
    const result = await propertyRepository.delete({ id });
    if (result.affected === 0) {
        return null;
    }
    return true;
}

const update = async (id: number, propertyData: Partial<Property>): Promise<Property | null> => {
    await propertyRepository.update(id, propertyData);
    return findById(id);
}

export { findAll, findById, create, deleteById, update }
