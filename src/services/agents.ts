import config from 'root/config';
import { mutation } from './';

const getAll = async (id: string): Promise<void> => {
  const res: any = await mutation(`${config.localApi}/users/filter`, 'POST', {
    company_id: id,
  });
  const data = res.data.users.map(
    ({ id, name, lastname, username, image }: any) => ({
      id,
      name,
      lastname,
      username,
      image,
    })
  );
  return data;
};

const getOne = async (id: string): Promise<any> => {
  const req = await fetch(`${config.localApi}/users/${id}`);
  const res = await req.json();
  const data = res.data.user;

  return {
    name: data.name,
    lastname: data.lastname,
    image: data.image,
    username: data.username,
    role: data.role.id,
  };
};

const save = (data: any, id?: number | string): Promise<void> => {
  if (!id) {
    return create(data);
  } else {
    return update(data, id);
  }
};

const create = async (data: any): Promise<void> => {
  const res: any = await mutation(`${config.localApi}/users`, 'POST', data);
  if (res.error) {
    throw new Error('Error al crear agente');
  }
  return res;
};

const update = async (data: any, id: number | string): Promise<void> => {
  const res: any = await mutation(
    `${config.localApi}/users/${id}`,
    'PATCH',
    data
  );
  if (res.error) {
    throw new Error('Error al actualizar');
  }
  return res;
};

export default {
  getAll,
  getOne,
  save,
};
