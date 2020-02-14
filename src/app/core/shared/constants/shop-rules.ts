import { ShopRules } from 'core/shared/interfaces/shop-rules.interface';

export const returnPolicy: ShopRules = Object.freeze({
  title: 'Return policy',
  content: [
    {
      type: 'Returns and exchanges',
      rules: [
        `In case if product appears to be of wrong size or poor quality, as result of manufacturing defect, customer has the right to return it or exchange on similar product of fine quality, if one is stock available. Exchange/refund demands are satisfied in 14 work days period since the delivery date.`,
        `We do not accept exchanges/refunds inquiries on discounted product, unless it appears to be of wrong size or poor quality, as result of manufacturing defect.`,
        `We do not accept exchanges/refunds inquiries on product purchased during sales, unless it appears to be of wrong size or poor quality, as result of manufacturing defect.`,
        `In case of exchange/refund inquiry all shipping costs are at customer expense, unless product appears to be of wrong size or poor quality, as result of manufacturing defect.`,
        `Shipping costs are not refundable, unless product appears to be of wrong size or poor quality as result of manufacturing defect.`,
        `For more info check our faq section or contact us via email.`
      ]
    }
  ]
});

export const shippingHandling: ShopRules = Object.freeze({
  title: 'Shipping + Handling',
  content: [
    {
      type: 'Domestic',
      rules: [
        'We use NovaPoshta service for all domestic shippings by default.',
        'Only prepaid orders are shipped.',
        'Shippings is at customer expense.'
      ]
    },
    {
      type: 'International',
      rules: [
        `Worldwide delivery is carried out by UkrPoshta service and ups.`,
        `All orders are trackable.`,
        `Shipping cost is calculated at the checkout and depends on shipping courier, ordered items, order weight and shipping region.`
      ]
    }
  ]
});
