import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const oneContact = createFakeContact();
    contacts.push(oneContact);
    await writeContacts(contacts);
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
