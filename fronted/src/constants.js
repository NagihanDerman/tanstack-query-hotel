export const inputs = [
  {
    label: "Title",
    name: "name",
    placeholder: "enter title...",
  },
  {
    label: "Location",
    name: "location",
    placeholder: "enter location..",
  },
  {
    label: "Address",
    name: "address",
    placeholder: "enter address..",
  },
  {
    label: "Description",
    name: "description",
    placeholder: "enter description..",
    isTextarea: true,
  },
  {
    label: "Amanities ( separate whith,)",
    name: "amenities",
    placeholder: "enter amenities..",
    isTextarea: true,
  },
  {
    label: "Rating",
    name: "rating",
    placeholder: "enter rating..",
    type: "number",
    min: 1,
    max: 5,
  },
  {
    label: "Price per night",
    name: "price_per_night",
    placeholder: "enter price..",
    type: "number",
    min: 20,
    max: 9999,
  },
  {
    label: "Is it availability?",
    name: "availability",
    type: "checkbox",
    required: false,
  },
];
