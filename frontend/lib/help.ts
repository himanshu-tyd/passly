import crypto from 'crypto'



export const decryptPass = (hexKey:string, encryptedPass: string): string => {

  
  const key = Buffer.from(hexKey, "hex");

  if (key.length !== 32) {
    throw new Error(`Invalid key length: ${key.length}`);
  }

  const [ivHex, encryptedData] = encryptedPass.split(":");

  if (!ivHex || !encryptedData) {
    throw new Error("Invalid encrypted format");
  }

  const iv = Buffer.from(ivHex, "hex");

  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    key,
    iv
  );

  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
}