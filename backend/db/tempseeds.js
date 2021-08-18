// spots seeds
// require userId, address, city, state, country, lat, lng, name, price
// [{ userId: 1, address: '3524 War Memorial St', city: 'Houston', state: 'Texas', country: 'US', lat: 29.823478, lng: -95.613592, name: 'Bear Creek Pioneers Park Tennis Court', price: 5 },
//   { userId: 1, address: '9506 S Gessner Rd', city: 'Houston', state: 'Texas', country: 'US', lat: 29.678670, lng: -95.530720, name: 'Lee LeClear Tennis Center Park', price: 10 },
//   { userId: 1, address: '1500 E Memorial Loop Dr', city: 'Houston', state: 'Texas', country: 'US', lat: 29.776330, lng: -95.429050, name: 'Memorial Park Tennis Center', price: 10 },
//   { userId: 2, address: '1200 Wilcrest Dr', city: 'Houston', state: 'Texas', country: 'US', lat: 29.750280, lng: -95.575060, name: 'Club Westside', price: 20 },
//   { userId: 2, address: '12803 Mcswain Rd', city: 'Cypress', state: 'Texas', country: 'US', lat: 29.983010, lng: -95.623350, name: 'Kluge Tennis Center', price: 15 },
//   { userId: 2, address: '7800 Johnny Morris Rd', city: 'Austin', state: 'Texas', country: 'US', lat: 30.314470, lng: -97.641340, name: 'Austin Tennis Center', price: 15 },
//   { userId: 2, address: '4201 Brookview Rd', city: 'Austin', state: 'Texas', country: 'US', lat: 30.2970381, lng: -97.7095152, name: 'Pharr Tennis Center', price: 15 },
//   { userId: 2, address: '2312 Shoal Creek Blvd', city: 'Austin', state: 'Texas', country: 'US', lat: 30.2878286, lng: -97.752346, name: 'Caswell Tennis Center', price: 15 },
//   { userId: 2, address: '1000 Cumberland Rd', city: 'Austin', state: 'Texas', country: 'US', lat: 30.239996, lng: -97.766101, name: 'South Austin Tennis Center', price: 15 },
//   { userId: 3, address: '1717 W Cesar Chavez St', city: 'Austin', state: 'Texas', country: 'US', lat: 30.27190589904785, lng: -97.76402282714844, name: 'Austin High Tennis Center', price: 15 },
//   { userId: 3, address: '2499 Steiner St', city: 'San Francisco', state: 'California', country: 'US', lat: 37.792128, lng: -122.436282, name: 'Alta Plaza Tennis Court', price: 15 },
//   { userId: 3, address: '1600 Holloway Ave', city: 'San Francisco', state: 'California', country: 'US', lat: 37.7245167, lng: -122.4800002, name: 'SFSU Tennis Courts', price: 15 },
//   { userId: 3, address: '1200 Greenwhich St', city: 'San Francisco', state: 'California', country: 'US', lat: 37.801122, lng: -122.419596, name: 'Alice Marble Tennis Courts', price: 15 },
//   { userId: 3, address: '3753 18th St', city: 'San Francisco', state: 'California', country: 'US', lat: 37.76127, lng: -122.4273142, name: 'Mission Dolores Park Tennis Courts', price: 15 },
//   { userId: 3, address: '1321 Taraval St', city: 'San Francisco', state: 'California', country: 'US', lat: 37.742645263671875, lng: -122.48506164550781, name: 'McCoppin Park Tennis Courts', price: 15 },
//   { userId: 3, address: '201 S Rengstorff Ave', city: 'Mountain View', state: 'California', country: 'US', lat: 37.40060806274414, lng: -122.09899139404297, name: 'Rengstorff Park Tenni Courts', price: 15 },
//   { userId: 3, address: '685 Cuesta Dr', city: 'Moutain View', state: 'California', country: 'US', lat: 37.3737002, lng: -122.0815884, name: 'Mountain View Tennis', price: 15 },
//   { userId: 3, address: '3203 W Morten Ave', city: 'Phoenix', state: 'Arizona', country: 'US', lat: 33.5475694, lng: -112.1281272, name: 'Mariposa Park Tennis Courts', price: 15 },
//   { userId: 3, address: '4700 Warner Rd', city: 'Phoenix', state: 'Arizona', country: 'US', lat: 33.330832, lng: -111.980833, name: 'Ahwatukee Tennis Club', price: 15 },
//   { userId: 3, address: '6268 W Thunderbird Rd', city: 'Glendale', state: 'Arizona', country: 'US', lat: 33.6107657, lng: -112.1935904, name: 'Paseo Racquet Center', price: 15 },
// ]

// bookings seeds
// require spotId, userId, startTime, endTime, date
// [{ spotId: 4, userId: 1, startTime: '13:00', endTime: '15:00', date: '2021-10-21' },
// { spotId: 5, userId: 1, startTime: '10:00', endTime: '11:00', date: '2021-10-22' },
// { spotId: 1, userId: 2, startTime: '8:00', endTime: '10:00', date: '2021-10-23' },
// { spotId: 1, userId: 3, startTime: '8:00', endTime: '10:00', date: '2021-10-25' },
// { spotId: 2, userId: 3, startTime: '8:00', endTime: '10:00', date: '2021-10-27' },
// { spotId: 3, userId: 3, startTime: '8:00', endTime: '10:00', date: '2021-10-29' },
// ]

// reviews seeds
// require userId, spotId, review, rating
// [{ userId: 1, spotId: 1, review: 'These courts are well maintained!', rating: 5 },
// { userId: 1, spotId: 2, review: 'Nice courts but pretty busy most nights', rating: 4 },
// { userId: 2, spotId: 2, review: 'The staff was rude!', rating: 2 },
// { userId: 3, spotId: 1, review: 'Lots of courts but large cracks in most of them', rating: 3 },
// { userId: 3, spotId: 2, review: 'Lots of courts but large cracks in most of them', rating: 3 },
// { userId: 3, spotId: 3, review: 'Lots of courts but large cracks in most of them', rating: 3 },
// ]

// images seeds
// require spotId, url
// [{ spotId: 1, url: 'https://images.unsplash.com/photo-1597893311798-9911ea4af043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80' },
// { spotId: 2, url: 'https://images.unsplash.com/photo-1551773188-0801da12ddae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
// { spotId: 3, url: 'https://images.unsplash.com/photo-1572969204008-82e6df3159c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' },
// { spotId: 4, url: 'https://images.unsplash.com/photo-1618548723848-1b339b8a7999?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80' },
// { spotId: 5, url: 'https://images.unsplash.com/photo-1572540688236-4eb938e8c099?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80' },
// { spotId: 1, url: 'https://images.unsplash.com/photo-1504460246720-502bf096369f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1501&q=80' },
// { spotId: 6, url: 'https://images.unsplash.com/photo-1564769353575-73f33a36d84f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHRlbm5pcyUyMGNvdXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
// { spotId: 7, url: 'https://images.unsplash.com/photo-1499510318569-1a3d67dc3976?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHRlbm5pcyUyMGNvdXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
// { spotId: 8, url: 'https://images.unsplash.com/photo-1614543346053-82d5c8a1b3ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHRlbm5pcyUyMGNvdXJ0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
// { spotId: 9, url: 'https://images.unsplash.com/photo-1560585810-44ce3741dd3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
// { spotId: 10, url: 'https://images.unsplash.com/photo-1531315396756-905d68d21b56?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
// { spotId: 11, url: 'https://images.unsplash.com/photo-1529281299797-953c33f93502?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIzfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
// { spotId: 12, url: 'https://images.unsplash.com/photo-1582699669911-89db9ff0d67f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM5fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
// { spotId: 13, url: 'https://images.unsplash.com/photo-1628544017295-74c0514aae7f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU0fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
// { spotId: 14, url: 'https://images.unsplash.com/photo-1566241121793-3e25f3586e43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTcxfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
// { spotId: 15, url: 'https://images.unsplash.com/photo-1564151445845-ff7b53d499c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM3fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
// { spotId: 16, url: 'https://images.unsplash.com/photo-1609264076154-3231eb5655a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjY5fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
// { spotId: 17, url: 'https://images.unsplash.com/photo-1614543345991-f9b06c9e8bab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjcxfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
// { spotId: 18, url: 'https://images.unsplash.com/photo-1591912419439-0b18c0a57b7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjk0fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
// { spotId: 19, url: 'https://images.unsplash.com/photo-1567220720374-a67f33b2a6b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUwfHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
// { spotId: 20, url: 'https://images.unsplash.com/photo-1581355655067-f6ef2e53aac7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ0fHx0ZW5uaXMlMjBjb3VydHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
// ]

