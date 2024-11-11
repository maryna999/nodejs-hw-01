import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const clearedContacts = [];
    await writeContacts(clearedContacts);
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
