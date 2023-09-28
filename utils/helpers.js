module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  format_nice_date: (date) => {
    if (!date) {
      return '';
    }
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },

  future_date: (date) => {
    const futureDate = new Date(date);
    futureDate.setDate(futureDate.getDate() + 75);
    return futureDate.toLocaleDateString();
  },
  sponsor_initials: (sponsorName) => {
    return sponsorName
      .split(' ')
      .map((item) => item.charAt(0))
      .join('');
  },
  is_cat_2: (category) => {
    category.toUppercase();
    const cat = category == '2B' ? true : false;
    return cat;
  },
};
