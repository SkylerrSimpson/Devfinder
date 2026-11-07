function invalid(message) {
  const error = new Error(message);
  error.status = 400;
  error.publicMessage = message;
  throw error;
}
function object(value) {
  if (!value || typeof value !== "object" || Array.isArray(value))
    invalid("Expected an object.");
  return value;
}
function text(value, max, label) {
  if (
    typeof value !== "string" ||
    !value.trim() ||
    value.trim().length > max ||
    /[\x00-\x1f\x7f]/.test(value)
  )
    invalid(`Invalid ${label}.`);
  return value.trim();
}
function validateId(id) {
  const value = String(id ?? "");
  if (!/^[1-9][0-9]{0,19}$/.test(value)) invalid("Invalid profile identifier.");
  return value;
}
function validateCreate(body) {
  object(body);
  const id = validateId(body._id);
  const login = text(body.login, 39, "username");
  if (!/^[a-z0-9-]+$/i.test(login)) invalid("Invalid username.");
  const avatar_url = text(body.avatar_url, 2048, "avatar URL");
  let url;
  try {
    url = new URL(avatar_url);
  } catch {
    invalid("Invalid avatar URL.");
  }
  if (url.protocol !== "https:" || url.username || url.password)
    invalid("Avatar must use HTTPS.");
  return { id, data: { login, avatar_url } };
}
function validateUpdate() {
  invalid("Profiles cannot be edited.");
}
module.exports = { validateCreate, validateUpdate, validateId };
