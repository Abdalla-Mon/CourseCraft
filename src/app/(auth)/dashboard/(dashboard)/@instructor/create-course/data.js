export const createCourseInputs = [
  {
    data: {
      id: "title",
      type: "text",
      label: "Title",
      name: "title",
    },
    sx: {
      width: "100%",
      "@media (min-width:600px)": {
        width: "73%",
        mr: "2%",
      },
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
      id: "category",
      type: "select",
      label: "Category",
      name: "category",
      options: "",
    },
    sx: {
      width: "100%",
      "@media (min-width:600px)": {
        width: "25%",
      },
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
      id: "price",
      type: "number",
      label: "Price",
      name: "price",
    },
    sx: {
      width: "100%",
      "@media (min-width:600px)": {
        width: "49%",
        mr: "2%",
      },
    },
    pattern: {
      required: {
        value: true,
        message: "Please enter a price",
      },
    },
  },
  {
    data: {
      id: "duration",
      type: "number",
      label: "Duration",
      name: "duration",
      helperText:
        "Expected duration of the course in hours you can modify it later",
    },
    sx: {
      width: "100%",
      "@media (min-width:600px)": {
        width: "49%",
      },
    },
    pattern: {
      required: {
        value: true,
        message: "Please enter a duration",
      },
    },
  },
  {
    data: {
      id: "learningOutcomes",
      type: "textarea",
      label: "Learning Outcomes",
      name: "learningOutcomes",
      helperText:
        "Note: Each learning outcome should be on a new line (press Enter after each learning outcome).",
    },

    pattern: {
      required: {
        value: true,
        message: "Please enter at least one learning outcome",
      },
    },
  },

  {
    data: {
      id: "courseImage",
      type: "file",
      label: "Image",
      name: "image",
      accept: "image/*",
    },
    pattern: {
      required: {
        value: true,
        message: "Please upload an image",
      },
    },
  },
];
