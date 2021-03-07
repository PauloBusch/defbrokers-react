import { 
  SECTION_SEARCHED,
  SECTION_FETCHED,
} from './SectionActionsTypes';

export default function (state = [], action) {
  switch(action.type) {
    case SECTION_FETCHED:
    case SECTION_SEARCHED: 
      return getSectionsByImmobiles(action.payload.data);
    default: 
      return state;
  }
}

function getSectionsByImmobiles(immobiles) {
  return getSections(immobiles).map(section => ({
    title: section,
    immobiles: immobiles
      .filter(immobile => immobile.section === section)
      .map(immobile => ({
        id: immobile._id,
        immobileType: immobile.type,
        realtor: immobile.realtorPhone,
        name: immobile.name,
        uf: immobile.address ? immobile.address.uf : null,
        city: immobile.address ? immobile.address.city : null,
        type: immobile.operation,
        price: immobile.price,
        image: immobile.image,
        description: immobile.description,
        differentials: immobile.differentials,
        photos: immobile.photos,
        caracteristics: {
          badrooms: immobile.badrooms,
          bathrooms: immobile.bathrooms,
          parkingSpaces: immobile.parkingSpaces,
          area: immobile.area
        }
      }))
  }));
}

function getSections(immobiles) {
  const sections = [];
  for (const immobile of immobiles) {
    if (sections.some(s => s === immobile.section)) continue;
    sections.push(immobile.section);
  }
  return sections
}
