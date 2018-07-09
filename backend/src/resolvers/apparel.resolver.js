import { apparelModel } from '../model';

export const apparelResolver = {
  Query: {
    allApparel: () => apparelModel.find(),
    apparel: (root, { id }) => apparelModel.findOne({ id })
    // allApparelForFuture: (root, { searchTerm }) => {
    //   return searchTerm === ''
    //       ? apparelModel.find()
    //       : apparelModel.find({ $text: { $search: searchTerm } });
    // }
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