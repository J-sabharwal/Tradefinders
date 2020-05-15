# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# bin/rake db:reset <- to reset seeds

puts "Re-creating Companies ... "

Company.destroy_all

Company.create!({
  name: "AAA Plumbers",
  email: "AAAPlums@gmail.com",
  description: "For all your Plumbing needs, available to work on bathrooms, kitchens, and central heating. ",
  phone_number: "623-854-9875",
  trade_type: "Plumbing",
  location: "Richmond",
  company_photo: "https://theplumbingco.com/wp-content/uploads/2016/11/about-the-original-plumbing-company.jpg",
})

Company.create!({
  name: "BBB Plumbers",
  email: "BBBPlums@gmail.com",
  description: "For all your Plumbing needs, available to work on bathrooms, kitchens. But super cheap!",
  phone_number: "623-854-9874",
  trade_type: "Plumbing",
  location: "Vancouver",
  company_photo: "https://stephenspandh.com/sites/default/files/styles/flexslider_full/public/shutterstock_566153617.jpg?itok=GbOT8Hzo",
})

Company.create!({
  name: "Mario Bros Plumbers",
  email: "Mario@gmail.com",
  description: "For all your Plumbing needs, available to work on mushroom world only.",
  phone_number: "623-824-9872",
  trade_type: "Plumbing",
  location: "Surrey",
  company_photo: "https://cdn.dribbble.com/users/75617/screenshots/11050092/image.png",
})

Company.create!({
  name: "Luigi Plumbers",
  email: "Luigi@gmail.com",
  description: "Cheaper than Mario! Double the quality, in half the time. Guaranteed!",
  phone_number: "623-824-9879",
  trade_type: "Plumbing",
  location: "Vancouver",
  company_photo: "https://i.pinimg.com/originals/c2/d1/ed/c2d1ed0716c40a008a1f6212ff634d48.jpg",
})

Company.create!({
  name: "123 Electricians",
  email: "123Guys@123guys.com",
  description: "Available for hire. Our prices will shock you! Our service is just so-so.",
  phone_number: "234-123-9875",
  trade_type: "Electrical",
  location: "Richmond",
  company_photo: "https://trk.localvox.com/sites/default/files/styles/480x240/public/content_images/depositphotos_30414567_m-2015_4.jpg?itok=M2O2yIdP",
})

Company.create!({
  name: "Grand Designs",
  email: "interiors@GDesigns.com",
  description: "Houses, Venues, Shopfronts. Have you got an ugly house? Let us beautify it for you!",
  phone_number: "890-456-1234",
  trade_type: "Painter/Decorator",
  location: "Vancouver",
  company_photo: "https://leaflette.org/wp-content/uploads/Interior-Design-Companies.jpg",
})

Company.create!({
  name: "Impressive Ideas",
  email: "II@hotmail.com",
  description: "Designing for over 40 years. We still manage to keep our ideas fresh.. you'll be impressed!",
  phone_number: "778-895-1234",
  trade_type: "Painter/Decorator",
  location: "Surrey",
  company_photo: "https://www.strategiesonline.net/wp-content/uploads/2014/04/Interior-Design.png",
})

User.destroy_all

User.create!({
  name: "Joe Bloggs",
  email: "joe@thebloggs.com",
  password: "password123",
  avatar: "https://i.imgur.com/Nmx0Qxo.png",

})

User.create!({
  name: "Teresa May",
  email: "maymay@pm.com",
  password: "password123",
  avatar: "https://i.imgur.com/LpaY82x.png",
})

User.create!({
  name: "Anthony Chambers",
  email: "ant@google.com",
  password: "password123",
  avatar: "https://i.imgur.com/FK8V841.jpg",
})

User.create!({
  name: "Jane Smith",
  email: "jane@googlemail.com",
  password: "password123",
  avatar: "https://i.imgur.com/TdOAdde.jpg",
})

User.create!({
  name: "Richard Hu",
  email: "richie@hotmail.com",
  password: "password123",
  avatar: "https://i.imgur.com/nPywAp1.jpg",
})

User.create!({
  name: "Jessica Rabbit",
  email: "jessica@roger.com",
  password: "password123",
  avatar: "https://i.imgur.com/T2WwVfS.png",
})

User.create!({
  name: "Andy Allen",
  email: "AA@yahoo.com",
  password: "password123",
  avatar: "https://i.imgur.com/okB9WKC.jpg",
})

Review.destroy_all

Review.create!({
  user_id: 1,
  company_id: 2,
  cleanliness: 4,
  reliability: 5,
  value: 3,
  workmanship: 4,
  comment: "Good Job",
})

Review.create!({
  user_id: 2,
  company_id: 2,
  cleanliness: 3,
  reliability: 4,
  value: 2,
  workmanship: 3,
  comment: "The work was ok, not cheap though.",
})

Review.create!({
  user_id: 3,
  company_id: 3,
  cleanliness: 3,
  reliability: 3,
  value: 2,
  workmanship: 4,
  comment: "Did an ok job, though for the price I paid, the quality of work should have been higher.",
})

Review.create!({
  user_id: 4,
  company_id: 4,
  cleanliness: 5,
  reliability: 5,
  value: 1,
  workmanship: 5,
  comment: "Excellent work done, a bit high on the price, but for the work done. I can't complain",
})

Review.create!({
  user_id: 5,
  company_id: 5,
  cleanliness: 3,
  reliability: 3,
  value: 4,
  workmanship: 3,
  comment: "Helped with a light fixture, however since then the fusebox keeps switching off. Had to call back again to fix this issue.",
})

Review.create!({
  user_id: 6,
  company_id: 2,
  cleanliness: 2,
  reliability: 1,
  value: 1,
  workmanship: 1,
  comment: "Hired to install the plumbing in the bathroom, which caused a leak to the downstairs. Overpriced and would not use again!",
})

Review.create!({
  user_id: 4,
  company_id: 1,
  cleanliness: 5,
  reliability: 5,
  value: 4,
  workmanship: 5,
  comment: "Had a boiler leak, the plumber came without a couple of hours and fix the issue within 30 minutes. Would recommend",
})

Review.create!({
  user_id: 3,
  company_id: 4,
  cleanliness: 4,
  reliability: 4,
  value: 2,
  workmanship: 4,
  comment: "Did the job, though for the work done, I don't think the price was reasonable",
})

Review.create!({
  user_id: 2,
  company_id: 3,
  cleanliness: 3,
  reliability: 1,
  value: 3,
  workmanship: 1,
  comment: "Fixed a leaky toilet, can't complain",
})

Review.create!({
  user_id: 1,
  company_id: 3,
  cleanliness: 5,
  reliability: 5,
  value: 4,
  workmanship: 5,
  comment: "Great Job",
})

Review.create!({
  user_id: 2,
  company_id: 6,
  cleanliness: 3,
  reliability: 4,
  value: 3,
  workmanship: 5,
  comment: "Helped redecorate our living room, looks amazing!",
})

Review.create!({
  user_id: 3,
  company_id: 7,
  cleanliness: 4,
  reliability: 3,
  value: 4,
  workmanship: 5,
  comment: "They did a very good job repainting our kitchen.",
})

Photo.destroy_all

Photo.create!({
  review_id: 1,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 2,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 3,
  photo_url: "https://atlascare.ca/wp-content/uploads/2020/03/IMG_7576.jpg",

})

Photo.create!({
  review_id: 4,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 5,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 6,
  photo_url: "https://atlascare.ca/wp-content/uploads/2020/03/IMG_7576.jpg",
})

Photo.create!({
  review_id: 7,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 9,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  company_id: 1,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  company_id: 2,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  company_id: 3,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  company_id: 4,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  company_id: 5,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  company_id: 6,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  company_id: 7,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  user_id: 1,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

puts "Complete!"
