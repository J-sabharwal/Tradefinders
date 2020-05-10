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
  description: "For all your plumbing needs, available to work on bathrooms, kitchens, and central heating. Domestic and Commercial hire",
  phone_number: "623-854-9875",
  trade_type: "Plumbing",
})

Company.create!({
  name: "BBB Plumbers",
  email: "BBBPlums@gmail.com",
  description: "For all your plumbing needs, available to work on bathrooms, kitchens. But super cheap!",
  phone_number: "623-854-9874",
  trade_type: "Plumbing",
})

Company.create!({
  name: "Mario Plumbers",
  email: "Mario@gmail.com",
  description: "For all your plumbing needs, available to work on mushroom world only",
  phone_number: "623-824-9872",
  trade_type: "Plumbing",
})

Company.create!({
  name: "Luigi Plumbers",
  email: "Luigi@gmail.com",
  description: "Cheaper than Mario! Double the quality",
  phone_number: "623-824-9879",
  trade_type: "Plumbing",
})

Company.create!({
  name: "123 Electricians",
  email: "123Guys@123guys.com",
  description: "Available for hire",
  phone_number: "234-123-9875",
  trade_type: "Electrical",
})

Company.create!({
  name: "Grand Designs",
  email: "interiors@GDesigns.com",
  description: "Houses, Venues, Shopfronts",
  phone_number: "890-456-1234",
  trade_type: "Painter/Decorator",
})

Company.create!({
  name: "Impressive Ideas",
  email: "II@hotmail.com",
  description: "Designing for over 40 years.",
  phone_number: "778-895-1234",
  trade_type: "Painter/Decorator",
})

User.destroy_all

User.create!({
  name: "Joe Bloggs",
  email: "joe@thebloggs.com",
  password: "password123",
})

User.create!({
  name: "Teresa May",
  email: "maymay@pm.com",
  password: "password123",
})

User.create!({
  name: "Anthony Chambers",
  email: "ant@google.com",
  password: "password123",
})

User.create!({
  name: "Jane Smith",
  email: "jane@googlemail.com",
  password: "password123",
})

User.create!({
  name: "Sarah Harper",
  email: "sarah@hotmail.com",
  password: "password123",
})

User.create!({
  name: "Jessica Rabbit",
  email: "jessica@roger.com",
  password: "password123",
})

User.create!({
  name: "Andy Allen",
  email: "AA@yahoo.com",
  password: "password123",
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
  comment: "Good Job",
})

Review.create!({
  user_id: 3,
  company_id: 3,
  cleanliness: 3,
  reliability: 3,
  value: 2,
  workmanship: 4,
  comment: "Good Job",
})

Review.create!({
  user_id: 4,
  company_id: 4,
  cleanliness: 5,
  reliability: 5,
  value: 1,
  workmanship: 5,
  comment: "Good Job",
})

Review.create!({
  user_id: 5,
  company_id: 5,
  cleanliness: 3,
  reliability: 3,
  value: 4,
  workmanship: 3,
  comment: "Good Job",
})

Review.create!({
  user_id: 6,
  company_id: 2,
  cleanliness: 2,
  reliability: 1,
  value: 1,
  workmanship: 1,
  comment: "Not great",
})

Review.create!({
  user_id: 4,
  company_id: 1,
  cleanliness: 5,
  reliability: 5,
  value: 4,
  workmanship: 5,
  comment: "Great Job",
})

Review.create!({
  user_id: 3,
  company_id: 4,
  cleanliness: 4,
  reliability: 4,
  value: 2,
  workmanship: 4,
  comment: "Great Job",
})

Review.create!({
  user_id: 2,
  company_id: 3,
  cleanliness: 3,
  reliability: 1,
  value: 3,
  workmanship: 1,
  comment: "It's ok",
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

Photo.destroy_all

Photo.create!({
  review_id: 1,
  photo_url: "https://www.reimerhvac.com/wp-content/uploads/2015/08/plumbing-buffalo-ny-affordable-services.jpg",
})

Photo.create!({
  review_id: 2,
  photo_url: "https://www.reimerhvac.com/wp-content/uploads/2015/08/plumbing-buffalo-ny-affordable-services.jpg",
})

Photo.create!({
  review_id: 2,
  photo_url: "https://www.reimerhvac.com/wp-content/uploads/2015/08/plumbing-buffalo-ny-affordable-services.jpg",
})

Photo.create!({
  review_id: 4,
  photo_url: "https://www.reimerhvac.com/wp-content/uploads/2015/08/plumbing-buffalo-ny-affordable-services.jpg",
})

Photo.create!({
  review_id: 5,
  photo_url: "https://www.reimerhvac.com/wp-content/uploads/2015/08/plumbing-buffalo-ny-affordable-services.jpg",
})

Photo.create!({
  review_id: 6,
  photo_url: "https://www.reimerhvac.com/wp-content/uploads/2015/08/plumbing-buffalo-ny-affordable-services.jpg",
})

Photo.create!({
  review_id: 7,
  photo_url: "https://www.reimerhvac.com/wp-content/uploads/2015/08/plumbing-buffalo-ny-affordable-services.jpg",
})

Photo.create!({
  review_id: 7,
  photo_url: "https://www.reimerhvac.com/wp-content/uploads/2015/08/plumbing-buffalo-ny-affordable-services.jpg",
})

Photo.create!({
  review_id: 9,
  photo_url: "https://www.reimerhvac.com/wp-content/uploads/2015/08/plumbing-buffalo-ny-affordable-services.jpg",
})

puts "Complete!"
