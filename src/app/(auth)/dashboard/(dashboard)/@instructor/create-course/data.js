export const createCourseInputs = [
  {
    data: {
      id: "title",
      type: "text",
      label: "Title",
      name: "title",
    },
    pattern: {
      required: {
        value: true,
        message: "Please enter a title",
      },
    },
  },
  {
    data: {
      id: "description",
      type: "text",
      label: "Description",
      name: "description",
    },
    pattern: {
      required: {
        value: true,
        message: "Please enter a description",
      },
    },
  },
  {
    data: {
      id: "categoryId",
      type: "select",
      label: "Category ID",
      name: "categoryId",
      options: [
        {
          value: "1",
          label: "1",
        },
        {
          value: "2",
          label: "2",
        },
        {
          value: "3",
          label: "3",
        },
      ],
    },
    pattern: {
      required: {
        value: true,
        message: "Please enter a category ID",
      },
    },
  },
  {
    data: {
      id: "price",
      type: "number",
      label: "Price",
      name: "price",
    },
    pattern: {
      required: {
        value: true,
        message: "Please enter a price",
      },
    },
  },
];
