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

# Plumbers  ------------------------------------------

Company.create!({
  name: "A1 Plumbers",
  email: "A1Plums@gmail.com",
  description: "For all your Plumbing needs, available to work on bathrooms, kitchens, and central heating. ",
  phone_number: "623-854-9875",
  trade_type: "Plumbing",
  location: "Coquitlam",
  company_photo: "https://theplumbingco.com/wp-content/uploads/2016/11/about-the-original-plumbing-company.jpg",
})

Company.create!({
  name: "BBB Plumbers",
  email: "bbbplumbing8@gmail.com",
  description: "For all your Plumbing needs, available to work on bathrooms, kitchens. But super cheap!",
  phone_number: "623-854-9874",
  trade_type: "Plumbing",
  location: "Coquitlam",
  company_photo: "https://stephenspandh.com/sites/default/files/styles/flexslider_full/public/shutterstock_566153617.jpg?itok=GbOT8Hzo",
})

Company.create!({
  name: "Mario Bros Plumbers",
  email: "Mario@gmail.com",
  description: "Established in 1960. Family run business - Luigi and I will be happy to help.",
  phone_number: "623-824-9872",
  trade_type: "Plumbing",
  location: "Surrey",
  company_photo: "https://cdn.dribbble.com/users/75617/screenshots/11050092/image.png",
})

Company.create!({
  name: "Mr. Rooters Plumbers",
  email: "Rooters@gmail.com",
  description: "Same Price, Any Time, Any Day! Available on holidays, at no additional charge!",
  phone_number: "604-262-0517",
  trade_type: "Plumbing",
  location: "Richmond",
  company_photo: "https://dnwj9yrfx8ijm.cloudfront.net/img/banner-20e3b013eb.png",
})

Company.create!({
  name: "Milani Air Conditioning",
  email: "MPHAC@gmail.com",
  description: "Family owned since 1956. We will keep you cool all year long.",
  phone_number: "604-888-8888",
  trade_type: "Plumbing",
  location: "Burnaby",
  company_photo: "https://www.milani.ca/wp-content/uploads/2017/03/fb-share-image.jpg",
})

Company.create!({
  name: "Lambert Plumbing/Heating",
  email: "lambert@lambert.com",
  description: "With Lambert Plumbing & Heating, Ltd, you have 100% guarantee on all services.",
  phone_number: "604-330-3841",
  trade_type: "Plumbing",
  location: "Vancouver",
  company_photo: "https://www.zhasotan.kz/wp-content/uploads/2019/05/Plubming.jpg",
})

Company.create!({
  name: "Papa Plumbing & Drainage",
  email: "papaplums@hotmail.com",
  description: "Residential Plumbing, Heating and Drainage Repair Services throughout Metro Vancouver.",
  phone_number: "604-437-7272",
  trade_type: "Plumbing",
  location: "Surrey",
  company_photo: "https://st.hzcdn.com/fimgs/47232aea0810c78f_4673-w181-h181-b0-p0--.jpg",
})

Company.create!({
  name: "Ocean Park",
  email: "info@hiltopplumbing.com",
  description: "Offering a full range of plumbing, heating and drain cleaning services.",
  phone_number: "604-614-6550",
  trade_type: "Plumbing",
  location: "Surrey",
  company_photo: "https://2188tw1z8ryc1vz3yo4ae3z9-wpengine.netdna-ssl.com/wp-content/uploads/2014/10/home-about.jpg",
})

# Electricians  ------------------------------------------

Company.create!({
  name: "Wicks Electric Inc",
  email: "info@wickselectric.ca",
  description: "Wicks Electric is a team of highly-motivated professional electricians.",
  phone_number: "604-765-8439",
  trade_type: "Electrical",
  location: "Vancouver",
  company_photo: "https://wickselectric.ca/wp-content/uploads/2016/01/Logo.jpg",
})

Company.create!({
  name: "Houle",
  email: "info@houle.ca",
  description: "At Houle, our vision is to be the industry leader through customer choice.",
  phone_number: "604-464-6853",
  trade_type: "Electrical",
  location: "Burnaby",
  company_photo: "https://www.supplychainconnector.ca/uploads/companydirectory/id3371/houle.jpg",
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
  name: "Badesha Electrical Ltd",
  email: "infob@badeshaelectric.ca",
  description: "Well Trained Technicians - repair to thousands of electrical problems every year.",
  phone_number: "604-780-6000",
  trade_type: "Electrical",
  location: "Surrey",
  company_photo: "https://smartguy.com/webservice/storage/category/const-electrical.jpg",
})

Company.create!({
  name: "WESPAC Electrical",
  email: "info@wespacelectric.com",
  description: "A qualified technician is always available 24 hours a day 365 days a year.",
  phone_number: "604-552-1322",
  trade_type: "Electrical",
  location: "Coquitlam",
  company_photo: "https://cdn.homestars.com/uploaded_images/0177/5781/Google_Profile_Picture.JPG",
})

Company.create!({
  name: "McRae Electric",
  email: "info@mcraeelectric.ca",
  description: "McRae Electric has worked with electronic automation systems for over 35 years.",
  phone_number: "604-291-7131",
  trade_type: "Electrical",
  location: "Burnaby",
  company_photo: "https://static.cms.yp.ca/ecms/media/1/2392170_lel-1446140043-600x360.jpg",
})

# Roofing  ------------------------------------------

Company.create!({
  name: "Cooper Roofing",
  email: "info@coopersroofs.ca",
  description: "A roof is so much more than a bunch of material. It’s what protects your family.",
  phone_number: "604-674-0319",
  trade_type: "Roofing",
  location: "Vancouver",
  company_photo: "https://pbs.twimg.com/profile_images/895686432890564610/Q75LOgS3_400x400.jpg",
})

Company.create!({
  name: "Larentian Roofing",
  email: "info@laurentianroofing.com",
  description: "BBB A+ Accredited Roofers. Feel a drip drip drip on your head? Call us to help.",
  phone_number: "604-345-7663",
  trade_type: "Roofing",
  location: "Vancouver",
  company_photo: "https://www.bbb.org/ProfileImages/da441dbd-72fb-450a-9375-73e234b2321f.png",
})

Company.create!({
  name: "Cedar Roofing",
  email: "info@cedarroofs.ca",
  description: "Cedar Roofing is a team of professional roofers, proudly serving the entire lower mainland.",
  phone_number: "604-243-8439",
  trade_type: "Roofing",
  location: "Burnaby",
  company_photo: "https://www.ssrcedar.com/slider/cedar.jpg",
})

# Appliance Repair  ------------------------------------------

Company.create!({
  name: "Vancouver Appliance",
  email: "info@appliances.ca",
  description: "Appliance Repair Service in Vancouver, serving you for over 40 years.",
  phone_number: "604-628-2434",
  trade_type: "Appliance Repair",
  location: "Vancouver",
  company_photo: "https://ww1.prweb.com/prfiles/2018/12/17/15994734/puls.jpg",
})

Company.create!({
  name: "Metrotown Appliance Repair",
  email: "info@metroappliance.ca",
  description: "Appliance Repair Service in Burnaby. We will come to you, anytime, anywhere.",
  phone_number: "604-628-9462",
  trade_type: "Appliance Repair",
  location: "Burnaby",
  company_photo: "https://manwithawrench.com/wp-content/uploads/2018/11/appliance-repair-services-toronto.jpg",
})

Company.create!({
  name: "Ben's Appliances",
  email: "info@bensappliances.ca",
  description: "Ben's Appliances is located in Surrey and proudly serves The entire Lower Mainland.",
  phone_number: "604-654-8569",
  trade_type: "Appliance Repair",
  location: "Surrey",
  company_photo: "https://www.bensappliances.ca/www/clients/bensappliancesplatinum/clientfiles/shopCategoryAd/BBDACABC-5056-BF1C-1C1EEB4B3E2D1D34-0.jpg",
})

# Painting & Decorating  ------------------------------------------

Company.create!({
  name: "Ideal Painting & Decorating",
  email: "bobby@idealpaintinganddecorating.com",
  description: "Ideal Painting is a team of highly-motivated professional painters.",
  phone_number: "788-240-5056",
  trade_type: "Painter/Decorator",
  location: "Surrey",
  company_photo: "https://www.idealpaintinganddecorating.com/wp-content/uploads/2018/06/banner2.jpg",
})

Company.create!({
  name: "Good Home Painting Co",
  email: "info@goodhomepainting.com",
  description: "In the age where quality is the exception, we choose to make it the standard.",
  phone_number: "604-732-9944",
  trade_type: "Painter/Decorator",
  location: "Vancouver",
  company_photo: "http://goodhomepainting.com/images/27.jpg",
})

Company.create!({
  name: "Bodden Painting Inc",
  email: "info@bodden.ca",
  description: "Painters available in the Richmond and UBC area.",
  phone_number: "604-303-0629",
  trade_type: "Painter/Decorator",
  location: "Richmond",
  company_photo: "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/09/painting-company-logo.jpg",
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
  email: "IIdeas@hotmail.com",
  description: "Designing for over 40 years. We still manage to keep our ideas fresh.. you'll be impressed!",
  phone_number: "778-895-1234",
  trade_type: "Painter/Decorator",
  location: "Surrey",
  company_photo: "https://www.strategiesonline.net/wp-content/uploads/2014/04/Interior-Design.png",
})

# Alarms & Security ------------------------------------------

Company.create!({
  name: "Interglobe Security",
  email: "info@interglobesecurity.com",
  description: "When you choose Interglobe Security, you can be confident that you are being looked after.",
  phone_number: "604-472-8965",
  trade_type: "Alarm & Security",
  location: "Surrey",
  company_photo: "https://images.idgesg.net/images/article/2018/08/gettyimages-516181976-100768091-large.jpg",
})

Company.create!({
  name: "A.M. Alarm Systems Ltd",
  email: "AMalarms@hotmail.com",
  description: "Keeping your home and family safe, so that you can have peace of mind and body.",
  phone_number: "604-685-1999",
  trade_type: "Alarm & Security",
  location: "Richmond",
  company_photo: "https://www.iotworldtoday.com/files/2019/02/smart-home-security.jpg",
})

# Carpet & Flooring  ------------------------------------------

Company.create!({
  name: "Floor Coverings International",
  email: "floorcoverings@coverings.com",
  description: "We are the premier flooring company serving the greater Vancouver, BC area.",
  phone_number: "604-248-5780",
  trade_type: "Carpet & Flooring",
  location: "Richmond",
  company_photo: "https://www.fcimag.com/ext/resources/FCI/Logos2/Floor-Coverings-Intl-logo.jpg",
})

Company.create!({
  name: "AAA Carpet Repairs",
  email: "mike@aaacarpetrepair.ca",
  description: "For over 26 years I have specialized in carpet repairs in Vancouver and the Lower Mainland.",
  phone_number: "604-671-7847",
  trade_type: "Carpet & Flooring",
  location: "North Vancouver",
  company_photo: "https://static.wixstatic.com/media/c353b6_7809b534afb24d7a9a82200e76df34a7~mv2.jpg",
})

Company.create!({
  name: "Carpet Vancouver LTD",
  email: "carpets@hotmail.com",
  description: "Carpet Installations 7 days a week. We work fast and have great carpet selection.",
  phone_number: "778-852-6498",
  trade_type: "Carpet & Flooring",
  location: "Vancouver",
  company_photo: "http://www.carpetvancouverbc.ca/resources/more-carpets/Majesty_RoomScene-1.jpg.opt980x980o0%2C0s980x980.jpg",
})

User.destroy_all

User.create!({
  name: "Jas Sabharwal",
  email: "jas@gmail.com",
  password: "password123",
  avatar: "https://i.imgur.com/T2WwVfS.png",

})

User.create!({
  name: "Brad Ruud",
  email: "brad@gmail.com",
  password: "password123",
  avatar: "https://i.imgur.com/okB9WKC.jpg",
})

User.create!({
  name: "Kevin Cheng",
  email: "kevin@google.com",
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

Review.destroy_all

# Plumbing Reviews  ------------------------------------------

Review.create!({
  user_id: 1,
  company_id: 2,
  cleanliness: 4,
  reliability: 5,
  value: 3,
  workmanship: 4,
  comment: "Arrived on schedule, and finished the work within 30 minutes. Fixed a leaking pipe in the bathroom.",
})

Review.create!({
  user_id: 2,
  company_id: 1,
  cleanliness: 4,
  reliability: 2,
  value: 2,
  workmanship: 2,
  comment: "Expensive and not worth the money you pay. Go with someone else.",
})

Review.create!({
  user_id: 3,
  company_id: 1,
  cleanliness: 3,
  reliability: 4,
  value: 2,
  workmanship: 4,
  comment: "Did an ok job, though for the price I paid, the quality of work should have been higher.",
})

Review.create!({
  user_id: 3,
  company_id: 2,
  cleanliness: 5,
  reliability: 5,
  value: 1,
  workmanship: 5,
  comment: "Excellent work done, a bit high on the price, but for the work done. I can't complain",
})

Review.create!({
  user_id: 3,
  company_id: 5,
  cleanliness: 3,
  reliability: 3,
  value: 4,
  workmanship: 3,
  comment: "Helped with a light fixture, however since then the fusebox keeps switching off. Had to call back again to fix this issue.",
})

Review.create!({
  user_id: 2,
  company_id: 4,
  cleanliness: 2,
  reliability: 1,
  value: 1,
  workmanship: 1,
  comment: "Hired to install the plumbing in the bathroom, which caused a leak to the downstairs. Overpriced and would not use again!",
})

Review.create!({
  user_id: 4,
  company_id: 2,
  cleanliness: 5,
  reliability: 5,
  value: 4,
  workmanship: 5,
  comment: "Had a boiler leak, the plumber came without a couple of hours and fix the issue within 30 minutes. Would recommend",
})

Review.create!({
  user_id: 3,
  company_id: 1,
  cleanliness: 4,
  reliability: 4,
  value: 2,
  workmanship: 4,
  comment: "Did the job, though for the work done, I don't think the price was reasonable",
})

Review.create!({
  user_id: 2,
  company_id: 5,
  cleanliness: 4,
  reliability: 5,
  value: 4,
  workmanship: 5,
  comment: "Fixed a leaky toilet, can't complain",
})

Review.create!({
  user_id: 1,
  company_id: 2,
  cleanliness: 5,
  reliability: 5,
  value: 4,
  workmanship: 5,
  comment: "Affordable and reliabile. would use again",
})

Review.create!({
  user_id: 2,
  company_id: 6,
  cleanliness: 3,
  reliability: 4,
  value: 3,
  workmanship: 5,
  comment: "Reasonably priced and did a decent job on the bathroom plumbing",
})

Review.create!({
  user_id: 3,
  company_id: 2,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "I would highly recommend, they was cheap compared to other companies.",
})

Review.create!({
  user_id: 3,
  company_id: 8,
  cleanliness: 4,
  reliability: 4,
  value: 2,
  workmanship: 4,
  comment: "Did the job, though for the work done, I don't think the price was reasonable",
})

Review.create!({
  user_id: 2,
  company_id: 4,
  cleanliness: 4,
  reliability: 5,
  value: 4,
  workmanship: 5,
  comment: "Fixed a leaky toilet, can't complain",
})

Review.create!({
  user_id: 1,
  company_id: 3,
  cleanliness: 5,
  reliability: 5,
  value: 4,
  workmanship: 5,
  comment: "Affordable and reliabile. would use again",
})

Review.create!({
  user_id: 2,
  company_id: 6,
  cleanliness: 3,
  reliability: 4,
  value: 3,
  workmanship: 5,
  comment: "Reasonably priced and did a decent job on the bathroom plumbing",
})

Review.create!({
  user_id: 3,
  company_id: 7,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "I would highly recommend, they was cheap compared to other companies.",
})

# Electrical Reviews  ------------------------------------------

Review.create!({
  user_id: 5,
  company_id: 9,
  cleanliness: 3,
  reliability: 2,
  value: 1,
  workmanship: 1,
  comment: "Really expensive and had to be called back as we had fusebox issues afterwards.",
})

Review.create!({
  user_id: 3,
  company_id: 9,
  cleanliness: 4,
  reliability: 5,
  value: 2,
  workmanship: 5,
  comment: "They did an amazing job, fixed all my chandeliers in the house and they look amazing. Thank you so much",
})

Review.create!({
  user_id: 3,
  company_id: 10,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "Needed some additional sockets added, came same day and fitted them within an hour. Very cheap too so glad I used this company.",
})

Review.create!({
  user_id: 1,
  company_id: 10,
  cleanliness: 4,
  reliability: 4,
  value: 5,
  workmanship: 5,
  comment: "This guy was amazing, he came straight away and carried the work that needed to doing and it was so cheap. I would highly recommend.",
})

Review.create!({
  user_id: 2,
  company_id: 11,
  cleanliness: 1,
  reliability: 1,
  value: 1,
  workmanship: 1,
  comment: "Do not use this company, they are terrible and overpriced. I had to bring in someone else to finish the work as they touched things that didnt even need fixing",
})

Review.create!({
  user_id: 5,
  company_id: 12,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "They added some lighting in my newly added pool. Looks amazing. I would use these guys again",
})

Review.create!({
  user_id: 4,
  company_id: 12,
  cleanliness: 5,
  reliability: 5,
  value: 5,
  workmanship: 5,
  comment: "OMG! These guys are really cheap, I was worried the work was going to be rubbish, but they came explained as they were working along what they are doing and didn't even make a mess.",
})

Review.create!({
  user_id: 2,
  company_id: 12,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "After reading some of the other reviews, I was set on using this company for the light fixtures I need installing in my bathroom and oh boy did they not disappoint. Don;t bother looking for anyone else.",
})

Review.create!({
  user_id: 3,
  company_id: 13,
  cleanliness: 4,
  reliability: 2,
  value: 1,
  workmanship: 2,
  comment: "I would not use this company, they changed the price midway through the work and even then my sockets aren't working.",
})

Review.create!({
  user_id: 1,
  company_id: 14,
  cleanliness: 4,
  reliability: 4,
  value: 3,
  workmanship: 5,
  comment: "They did a good job, price was ok still a bit on the pricey side but not as much as some of the other quotes I;ve received.",
})

Review.create!({
  user_id: 5,
  company_id: 9,
  cleanliness: 3,
  reliability: 2,
  value: 1,
  workmanship: 1,
  comment: "Really expensive and had to be called back as we had fusebox issues afterwards.",
})

Review.create!({
  user_id: 3,
  company_id: 10,
  cleanliness: 4,
  reliability: 5,
  value: 2,
  workmanship: 5,
  comment: "They did an amazing job, fixed all my chandeliers in the house and they look amazing. Thank you so much",
})

Review.create!({
  user_id: 3,
  company_id: 11,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "Needed some additional sockets added, came same day and fitted them within an hour. Very cheap too so glad I used this company.",
})

Review.create!({
  user_id: 1,
  company_id: 12,
  cleanliness: 4,
  reliability: 4,
  value: 5,
  workmanship: 5,
  comment: "This guy was amazing, he came straight away and carried the work that needed to doing and it was so cheap. I would highly recommend.",
})

Review.create!({
  user_id: 2,
  company_id: 13,
  cleanliness: 1,
  reliability: 1,
  value: 1,
  workmanship: 1,
  comment: "Do not use this company, they are terrible and overpriced. I had to bring in someone else to finish the work as they touched things that didnt even need fixing",
})

Review.create!({
  user_id: 5,
  company_id: 14,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "They added some lighting in my newly added pool. Looks amazing. I would use these guys again",
})

Review.create!({
  user_id: 4,
  company_id: 14,
  cleanliness: 5,
  reliability: 5,
  value: 5,
  workmanship: 5,
  comment: "OMG! These guys are really cheap, I was worried the work was going to be rubbish, but they came explained as they were working along what they are doing and didn't even make a mess.",
})

# Roofing Reviews  ------------------------------------------

Review.create!({
  user_id: 4,
  company_id: 15,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "We had some roof damage caused by the recent storm. The were able to come the next day and repair everything for a reasonable price. The work looks good.",
})

Review.create!({
  user_id: 5,
  company_id: 15,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "I would highly recommend, they was cheap compared to other companies.",
})

Review.create!({
  user_id: 3,
  company_id: 16,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "Excellent work done on my roofing",
})

Review.create!({
  user_id: 3,
  company_id: 16,
  cleanliness: 4,
  reliability: 4,
  value: 2,
  workmanship: 5,
  comment: "Not cheap but work done was good.",
})

Review.create!({
  user_id: 4,
  company_id: 15,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "We had some roof damage caused by the recent storm. The were able to come the next day and repair everything for a reasonable price. The work looks good.",
})

Review.create!({
  user_id: 5,
  company_id: 17,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "I would highly recommend, they was cheap compared to other companies.",
})

Review.create!({
  user_id: 3,
  company_id: 16,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "Excellent work done on my roofing",
})

# Appliance repair --------------------------------------

Review.create!({
  user_id: 4,
  company_id: 18,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "They fixed my appliance.",
})

Review.create!({
  user_id: 5,
  company_id: 19,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "I would highly recommend, they was cheap compared to other companies.",
})

Review.create!({
  user_id: 3,
  company_id: 20,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "Excellent work done on my dishwasher",
})

# Painter/Decorator --------------------------------------

Review.create!({
  user_id: 4,
  company_id: 21,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "We had some roof damage caused by the recent storm. The were able to come the next day and repair everything for a reasonable price. The work looks good.",
})

Review.create!({
  user_id: 5,
  company_id: 22,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "I would highly recommend, they was cheap compared to other companies.",
})

Review.create!({
  user_id: 3,
  company_id: 23,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "Excellent work done on my roofing",
})

Review.create!({
  user_id: 3,
  company_id: 24,
  cleanliness: 4,
  reliability: 4,
  value: 2,
  workmanship: 5,
  comment: "Not cheap but work done was good.",
})

Review.create!({
  user_id: 3,
  company_id: 25,
  cleanliness: 4,
  reliability: 4,
  value: 2,
  workmanship: 5,
  comment: "Not cheap but work done was good.",
})

# Alarm & Security reviews --------------------------------------

Review.create!({
  user_id: 4,
  company_id: 26,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "They fixed my appliance.",
})

Review.create!({
  user_id: 5,
  company_id: 27,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "I would highly recommend, they was cheap compared to other companies.",
})

Review.create!({
  user_id: 3,
  company_id: 27,
  cleanliness: 4,
  reliability: 4,
  value: 4,
  workmanship: 5,
  comment: "Excellent work done on my dishwasher",
})


# Carpet & Flooring Reviews  ------------------------------------------

Review.create!({
  user_id: 3,
  company_id: 28,
  cleanliness: 4,
  reliability: 4,
  value: 2,
  workmanship: 5,
  comment: "Not cheap but work done was good.",
})

Review.create!({
  user_id: 3,
  company_id: 29,
  cleanliness: 4,
  reliability: 4,
  value: 2,
  workmanship: 5,
  comment: "Not cheap but work done was good.",
})

Review.create!({
  user_id: 3,
  company_id: 30,
  cleanliness: 4,
  reliability: 4,
  value: 2,
  workmanship: 5,
  comment: "Not cheap but work done was good.",
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
  review_id: 8,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 10,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 11,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 12,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 13,
  photo_url: "https://atlascare.ca/wp-content/uploads/2020/03/IMG_7576.jpg",

})

Photo.create!({
  review_id: 14,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 15,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 16,
  photo_url: "https://atlascare.ca/wp-content/uploads/2020/03/IMG_7576.jpg",
})

Photo.create!({
  review_id: 17,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 19,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 18,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 20,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 21,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 22,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 23,
  photo_url: "https://atlascare.ca/wp-content/uploads/2020/03/IMG_7576.jpg",

})

Photo.create!({
  review_id: 24,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 25,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 26,
  photo_url: "https://atlascare.ca/wp-content/uploads/2020/03/IMG_7576.jpg",
})

Photo.create!({
  review_id: 27,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 29,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 28,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 30,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 31,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 32,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 33,
  photo_url: "https://atlascare.ca/wp-content/uploads/2020/03/IMG_7576.jpg",

})

Photo.create!({
  review_id: 34,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 35,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 36,
  photo_url: "https://atlascare.ca/wp-content/uploads/2020/03/IMG_7576.jpg",
})

Photo.create!({
  review_id: 37,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 39,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 38,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 40,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 41,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 42,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 43,
  photo_url: "https://atlascare.ca/wp-content/uploads/2020/03/IMG_7576.jpg",

})

Photo.create!({
  review_id: 44,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 45,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 46,
  photo_url: "https://atlascare.ca/wp-content/uploads/2020/03/IMG_7576.jpg",
})

Photo.create!({
  review_id: 47,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 49,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 48,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 50,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 51,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 52,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 53,
  photo_url: "https://atlascare.ca/wp-content/uploads/2020/03/IMG_7576.jpg",

})

Photo.create!({
  review_id: 54,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})

Photo.create!({
  review_id: 55,
  photo_url: "https://cdn.vox-cdn.com/thumbor/pRy3gGPmO5o17FGa5lhCWkQrTeA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19519682/gallery_green_towels.jpg",
})


puts "Complete!"
