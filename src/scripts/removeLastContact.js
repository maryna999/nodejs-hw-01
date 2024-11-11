import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    contacts.pop();
    await writeContacts(contacts);
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
