import { AppDataSource } from "../data-source";
import { Tenant } from "../models/Tenant";

const tenantRepository = AppDataSource.getRepository(Tenant);

const create = async (tenantData: Tenant): Promise<Tenant> => {
    const tenant = tenantRepository.create(tenantData);
    return tenantRepository.save(tenant);
};

const findAll = async (): Promise<Tenant[]> => {
    return tenantRepository.find();
};

const findByID = async (id: number): Promise<Tenant | null> => {
    return tenantRepository.findOneBy({ id });
}
const findByDNI = async (dni: number): Promise<Tenant | null> => {
    return tenantRepository.findOneBy({ dni });
}

const update = async (id: number, tenantData: Partial<Tenant>): Promise<Tenant | null> => {
    await tenantRepository.update(id, tenantData);
    return findByID(id);
}

const deleteById = async (id: number): Promise<boolean | null> => {
    const result = await tenantRepository.delete({ id });
    if (result.affected === 0) {
        return null;
    }
    return true;
}

export { findAll, findByID, findByDNI, create, deleteById, update }