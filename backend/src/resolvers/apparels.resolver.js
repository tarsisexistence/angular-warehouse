import { apparelModel } from '../models/apparel.model';

export const apparelResolver = {
  Query: {
    allApparel: (root, { searchTerm }) => {
      return searchTerm === ''
          ? apparelModel.find()
          : apparelModel.find({ $text: { $search: searchTerm } });
    },
    apparel: (root, { id }) => apparelModel.findOne({ id })
  },
  Mutation: {
    addApparel: (root, { title, color, attribute, description, price, image, type }) => {
      const apparel = new apparelModel({
        title,
        attribute,
        color,
        description,
        price,
        image,
        type
      });

      return apparel.save();
    }
  }
};
