import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';
export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));
    console.log('Все контакты удалены');
  } catch (error) {
    console.error('Ошибка при удалении контактов:', error);
    throw error;
  }
};

removeAllContacts();
