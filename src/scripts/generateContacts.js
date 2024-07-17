import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const generateContacts = async (number) => {
  try {
    const newContactsPush = [];
    for (let i = 0; i < number; i++) {
      newContactsPush.push(createFakeContact());
    }
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const updatedContacts = [...contacts, ...newContactsPush];
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf-8',
    );
    console.log(`${number} new contacts added successfully!`);
    console.log(`Общее количество контактов теперь: ${updatedContacts.length}`);
  } catch (err) {
    console.error('Error:', err);
  }
};

generateContacts(3);
