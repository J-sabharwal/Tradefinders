# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Re-creating Companies ... "

Companies.destroy_all

companies.create!({
  name: 'AAA Plumbers',
  email: 'AAAPlums@gmail.com',
  description: 'For all your plumbing needs, available to work on bathrooms, kitchens, and central heating. Domestic and Commercial hire',
  phone_number: '623-854-9875',
  trade_type: 'Plumbing'
})

companies.create!({
  name: 'BBB Plumbers',
  email: 'BBBPlums@gmail.com',
  description: 'For all your plumbing needs, available to work on bathrooms, kitchens. But super cheap!'
  phone_number: '623-854-9874',
  trade_type: 'Plumbing'
})

companies.create!({
  name: 'Mario Plumbers',
  email: 'Mario@gmail.com',
  description: 'For all your plumbing needs, available to work on mushroom world only',
  phone_number: '623-824-9872',
  trade_type: 'Plumbing'
})

companies.create!({
  name: 'Luigi Plumbers',
  email: 'Luigi@gmail.com',
  description: 'Cheaper than Mario! Double the quality',
  phone_number: '623-824-9879',
  trade_type: 'Plumbing'
})

companies.create!({
  name: '123 Electricians',
  email: '123Guys@123guys.com',
  description: 'Available for hire',
  phone_number: '234-123-9875',
  trade_type: 'Electrical'
})

companies.create!({
  name: 'Grand Designs',
  email: 'interiors@GDesigns.com',
  description: 'Houses, Venues, Shopfronts',
  phone_number: '890-456-1234',
  trade_type: 'Painter/Decorator'
})

companies.create!({
  name: 'Impressive Ideas',
  email: 'II@hotmail.com',
  description: 'Designing for over 40 years.',
  phone_number: '778-895-1234',
  trade_type: 'Painter/Decorator'
})

puts "Complete!"