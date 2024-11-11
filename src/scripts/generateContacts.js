import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    for (let i = 1; i <= number; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }
    await writeContacts(contacts);
  } catch (error) {
    console.error(error);
  }
};
generateContacts(5);
