'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Images', [{ spotId: 1, url: 'https://images.unsplash.com/photo-1597893311798-9911ea4af043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80' },
    { spotId: 2, url: 'https://images.unsplash.com/photo-1551773188-0801da12ddae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
    { spotId: 3, url: 'https://images.unsplash.com/photo-1572969204008-82e6df3159c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' },
    { spotId: 4, url: 'https://images.unsplash.com/photo-1618548723848-1b339b8a7999?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80' },
    { spotId: 5, url: 'https://images.unsplash.com/photo-1572540688236-4eb938e8c099?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80' },
    { spotId: 6, url: 'https://images.unsplash.com/photo-1564769353575-73f33a36d84f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHRlbm5pcyUyMGNvdXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 7, url: 'https://images.unsplash.com/photo-1499510318569-1a3d67dc3976?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHRlbm5pcyUyMGNvdXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 8, url: 'https://images.unsplash.com/photo-1614543346053-82d5c8a1b3ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHRlbm5pcyUyMGNvdXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 9, url: 'https://images.unsplash.com/photo-1560585810-44ce3741dd3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 10, url: 'https://images.unsplash.com/photo-1531315396756-905d68d21b56?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 11, url: 'https://images.unsplash.com/photo-1529281299797-953c33f93502?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 12, url: 'https://images.unsplash.com/photo-1582699669911-89db9ff0d67f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM5fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 13, url: 'https://images.unsplash.com/photo-1628544017295-74c0514aae7f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU0fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 14, url: 'https://images.unsplash.com/photo-1566241121793-3e25f3586e43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcxfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 15, url: 'https://images.unsplash.com/photo-1564151445845-ff7b53d499c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM3fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 16, url: 'https://images.unsplash.com/photo-1609264076154-3231eb5655a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjY5fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 17, url: 'https://images.unsplash.com/photo-1614543345991-f9b06c9e8bab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjcxfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 18, url: 'https://images.unsplash.com/photo-1591912419439-0b18c0a57b7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjk0fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 19, url: 'https://images.unsplash.com/photo-1567220720374-a67f33b2a6b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUwfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 20, url: 'https://images.unsplash.com/photo-1581355655067-f6ef2e53aac7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ0fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 1, url: 'https://houstonprimerealty.com/wp-content/uploads/2018/03/Bear-Creek-Tennis-Courts.jpg' },
    { spotId: 2, url: 'https://epmgaa.media.clients.ellingtoncms.com/img/photos/2016/08/26/hr3546560-24.jpg' },
    { spotId: 3, url: 'https://www.playyourcourt.com/news/wp-content/uploads/2018/08/houston-tennis-lessons.jpg' },
    { spotId: 4, url: 'https://images.unsplash.com/photo-1618548723848-1b339b8a7999?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80' },
    { spotId: 5, url: 'https://images.unsplash.com/photo-1572540688236-4eb938e8c099?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80' },
    { spotId: 6, url: 'https://images.unsplash.com/photo-1564769353575-73f33a36d84f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHRlbm5pcyUyMGNvdXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 7, url: 'https://images.unsplash.com/photo-1499510318569-1a3d67dc3976?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHRlbm5pcyUyMGNvdXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 8, url: 'https://images.unsplash.com/photo-1614543346053-82d5c8a1b3ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHRlbm5pcyUyMGNvdXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 9, url: 'https://images.unsplash.com/photo-1560585810-44ce3741dd3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 10, url: 'https://images.unsplash.com/photo-1531315396756-905d68d21b56?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 11, url: 'https://images.unsplash.com/photo-1529281299797-953c33f93502?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 12, url: 'https://images.unsplash.com/photo-1582699669911-89db9ff0d67f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM5fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 13, url: 'https://images.unsplash.com/photo-1628544017295-74c0514aae7f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU0fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 14, url: 'https://images.unsplash.com/photo-1566241121793-3e25f3586e43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcxfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 15, url: 'https://images.unsplash.com/photo-1564151445845-ff7b53d499c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM3fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 16, url: 'https://images.unsplash.com/photo-1609264076154-3231eb5655a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjY5fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 17, url: 'https://images.unsplash.com/photo-1614543345991-f9b06c9e8bab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjcxfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 18, url: 'https://images.unsplash.com/photo-1591912419439-0b18c0a57b7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjk0fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 19, url: 'https://images.unsplash.com/photo-1567220720374-a67f33b2a6b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUwfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 20, url: 'https://images.unsplash.com/photo-1581355655067-f6ef2e53aac7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ0fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 1, url: 'https://fastly.4sqi.net/img/general/600x600/197347092_EwIpJ9l2hkih3WNTZeudfePCS7QPA6cHnbMPZnPyJ3o.jpg' },
    { spotId: 2, url: 'https://epmgaa.media.clients.ellingtoncms.com/img/photos/2016/03/21/unnamed-2_t750x550.jpg?d885fc46c41745b3b5de550c70336c1b382931d2' },
    { spotId: 3, url: 'https://s3-media0.fl.yelpcdn.com/bphoto/n2f4tqufwD2B97KKqoiy3Q/l.jpg' },
    { spotId: 4, url: 'https://images.unsplash.com/photo-1618548723848-1b339b8a7999?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80' },
    { spotId: 5, url: 'https://images.unsplash.com/photo-1572540688236-4eb938e8c099?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80' },
    { spotId: 6, url: 'https://images.unsplash.com/photo-1564769353575-73f33a36d84f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHRlbm5pcyUyMGNvdXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 7, url: 'https://images.unsplash.com/photo-1499510318569-1a3d67dc3976?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHRlbm5pcyUyMGNvdXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 8, url: 'https://images.unsplash.com/photo-1614543346053-82d5c8a1b3ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHRlbm5pcyUyMGNvdXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 9, url: 'https://images.unsplash.com/photo-1560585810-44ce3741dd3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 10, url: 'https://images.unsplash.com/photo-1531315396756-905d68d21b56?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 11, url: 'https://images.unsplash.com/photo-1529281299797-953c33f93502?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 12, url: 'https://images.unsplash.com/photo-1582699669911-89db9ff0d67f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM5fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 13, url: 'https://images.unsplash.com/photo-1628544017295-74c0514aae7f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU0fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 14, url: 'https://images.unsplash.com/photo-1566241121793-3e25f3586e43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcxfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 15, url: 'https://images.unsplash.com/photo-1564151445845-ff7b53d499c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM3fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 16, url: 'https://images.unsplash.com/photo-1609264076154-3231eb5655a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjY5fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 17, url: 'https://images.unsplash.com/photo-1614543345991-f9b06c9e8bab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjcxfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 18, url: 'https://images.unsplash.com/photo-1591912419439-0b18c0a57b7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjk0fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 19, url: 'https://images.unsplash.com/photo-1567220720374-a67f33b2a6b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUwfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 20, url: 'https://images.unsplash.com/photo-1581355655067-f6ef2e53aac7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ0fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 1, url: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Bear_Creek_Regional_Park_-_Bear_Creek_Terrace_-_Tennis_courts_3.jpg' },
    { spotId: 2, url: 'https://s3-media0.fl.yelpcdn.com/bphoto/HiYA28jqkdYkqRZl5WhpWw/l.jpg' },
    { spotId: 3, url: 'https://www.smgov.net/uploadedImages/Departments/CCS/Places_Parks_Beach/Parks/2018_44_Tennis_Memorial_medrez_%C2%A9KristinaSado.jpg' },
    { spotId: 4, url: 'https://images.unsplash.com/photo-1618548723848-1b339b8a7999?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80' },
    { spotId: 5, url: 'https://images.unsplash.com/photo-1572540688236-4eb938e8c099?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80' },
    { spotId: 6, url: 'https://images.unsplash.com/photo-1564769353575-73f33a36d84f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHRlbm5pcyUyMGNvdXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 7, url: 'https://images.unsplash.com/photo-1499510318569-1a3d67dc3976?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHRlbm5pcyUyMGNvdXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 8, url: 'https://images.unsplash.com/photo-1614543346053-82d5c8a1b3ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHRlbm5pcyUyMGNvdXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 9, url: 'https://images.unsplash.com/photo-1560585810-44ce3741dd3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 10, url: 'https://images.unsplash.com/photo-1531315396756-905d68d21b56?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 11, url: 'https://images.unsplash.com/photo-1529281299797-953c33f93502?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 12, url: 'https://images.unsplash.com/photo-1582699669911-89db9ff0d67f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM5fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 13, url: 'https://images.unsplash.com/photo-1628544017295-74c0514aae7f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU0fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 14, url: 'https://images.unsplash.com/photo-1566241121793-3e25f3586e43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcxfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 15, url: 'https://images.unsplash.com/photo-1564151445845-ff7b53d499c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM3fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 16, url: 'https://images.unsplash.com/photo-1609264076154-3231eb5655a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjY5fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 17, url: 'https://images.unsplash.com/photo-1614543345991-f9b06c9e8bab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjcxfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 18, url: 'https://images.unsplash.com/photo-1591912419439-0b18c0a57b7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjk0fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 19, url: 'https://images.unsplash.com/photo-1567220720374-a67f33b2a6b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUwfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 20, url: 'https://images.unsplash.com/photo-1581355655067-f6ef2e53aac7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ0fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 1, url: 'https://www.eulesstx.gov/home/showpublishedimage/2190/636971443216470000' },
    { spotId: 2, url: 'https://fastly.4sqi.net/img/general/600x600/2695220_KqKo6XwGmxQqCTwrSTH028b6MXV7w67BKgYCKgqEndU.jpg' },
    { spotId: 3, url: 'https://www.hvilletn.org/home/showpublishedimage/518/636462760324130000' },
    { spotId: 4, url: 'https://images.unsplash.com/photo-1618548723848-1b339b8a7999?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80' },
    { spotId: 5, url: 'https://images.unsplash.com/photo-1572540688236-4eb938e8c099?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80' },
    { spotId: 6, url: 'https://images.unsplash.com/photo-1564769353575-73f33a36d84f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHRlbm5pcyUyMGNvdXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 7, url: 'https://images.unsplash.com/photo-1499510318569-1a3d67dc3976?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHRlbm5pcyUyMGNvdXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 8, url: 'https://images.unsplash.com/photo-1614543346053-82d5c8a1b3ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHRlbm5pcyUyMGNvdXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 9, url: 'https://images.unsplash.com/photo-1560585810-44ce3741dd3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 10, url: 'https://images.unsplash.com/photo-1531315396756-905d68d21b56?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 11, url: 'https://images.unsplash.com/photo-1529281299797-953c33f93502?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 12, url: 'https://images.unsplash.com/photo-1582699669911-89db9ff0d67f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM5fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 13, url: 'https://images.unsplash.com/photo-1628544017295-74c0514aae7f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU0fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 14, url: 'https://images.unsplash.com/photo-1566241121793-3e25f3586e43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcxfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 15, url: 'https://images.unsplash.com/photo-1564151445845-ff7b53d499c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM3fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 16, url: 'https://images.unsplash.com/photo-1609264076154-3231eb5655a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjY5fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 17, url: 'https://images.unsplash.com/photo-1614543345991-f9b06c9e8bab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjcxfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 18, url: 'https://images.unsplash.com/photo-1591912419439-0b18c0a57b7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjk0fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 19, url: 'https://images.unsplash.com/photo-1567220720374-a67f33b2a6b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUwfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { spotId: 20, url: 'https://images.unsplash.com/photo-1581355655067-f6ef2e53aac7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ0fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Images', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
