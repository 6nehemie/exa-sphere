/**
 * function to get the initials of a user
 * @param name The full name of the user
 * @returns the initials of the user (e.g. John Doe => JD)
 */
const toInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('');
};

export default toInitials;
