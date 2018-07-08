import { userModel } from '../model';

const crypto = require('crypto');

export const userResolver = {
  Query: {
    user: (root, { id }) => userModel.findOne({ id }),
    signIn: (root, { email, password }) => {
      return userModel.findOne({ email, password: encryption(password) });
    }
  },
  Mutation: {
    signUp: (root, { email, password }) => {
      const user = new userModel({
        email,
        password: encryption(password)
      });

      return user.save();
    },
    setCatchPhrase: (root, { id, catchPhrase }) => {
      return userModel.findOneAndUpdate({ id }, { catchPhrase });
    }
  }
};

const KEY = 'csprkey';

function encryption(password) {
  const cipher = crypto.createCipher('aes192', KEY);

  let encrypted = '';
  cipher.on('readable', () => {

    const data = cipher.read();

    if (!data) {
      return;
    }

    encrypted += data.toString('hex');
  });


  cipher.write(password);
  cipher.end();

  return encrypted;
}

function decryption(encrypted) {
  const decipher = crypto.createDecipher('aes192', KEY);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}
