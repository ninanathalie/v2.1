/**
 * Validates if the provided value is a string and its length is less than or equal to the specified maxLength.
 *
 * @param value - The value to be validated.
 * @param maxLength - The maximum length allowed for the value.
 * @returns A boolean indicating whether the value is a string and its length is less than or equal to the specified maxLength.
 */
export const validateString = (value: unknown, maxLength: number): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

/**
 * Get the error message from the provided error.
 *
 * @param error - The error object or string to get the message from.
 * @returns The error message as a string.
 */
export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
