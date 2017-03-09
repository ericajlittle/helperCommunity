# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding Data ..."

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('db', 'seed_assets', file_name))
end

# Only run on development (local) instances not on production, etc.
# unless Rails.env.development?
#   puts "Development seeds only (for now)!"
#   exit 0
# end

# Let's do this ...

## USERS

puts "Re-creating Users ..."

User.destroy_all

u1 = User.create!({
  name:  'Edward',
  email: 'edward@gmail.com',
  password_digest: '123456',
  photo: open_asset('Xinyi.jpg'),
  description: 'Hey there, I am here to connect with my city, meet new people and get involved. I love to write awesome code and make awesome things!',
  DoB: 22.years.from_now,
  phone_number: '+16046796423'
})

u2 = User.create!({
  name:  'Irina',
  email: 'irina@gmail.com',
  password_digest: '123456',
  photo: open_asset('Irina.jpg'),
  description: 'Hey everyone, I am excited to connect with my city. I have lived in Vancouver for four years and
  love it!',
  DoB: 22.years.from_now,
  phone_number: '+16046796423'
})

u3 = User.create!({
  name:  'Erica',
  email: 'erica@gmail.com',
  password_digest: '123456',
  photo: open_asset('Erica.jpg'),
  description: 'My name is Erica. I love my community and contributing to social initiatives all over the city. I love dark chocolate and my dog Chico.',
  DoB: 50.years.ago,
  phone_number: '+16046796423'
})

u4 = User.create!({
  name:  'Michael',
  email: 'michael@gmail.com',
  password_digest: '123456',
  photo: open_asset('21.05,16_BMC_Me.jpg'),
  description: 'Hey everyone. I live in east van, I love coding and my two bunnies Mocha and Honey.',
  DoB: 30.years.ago,
  phone_number: '+16046796423'
})

u5 = User.create!({
  name:  'Phelan',
  email: 'phelan@gmail.com',
  password_digest: '123456',
  photo: open_asset('Phelan.jpg'),
  description: 'I love making soap and cheese. I have a very cute large dog and an even sweeter orange cat. Lets connect.',
  DoB: 50.years.ago,
  phone_number: '+16046796423'
})


puts "DONE!"

# EVENTS

puts "Re-creating Events..."

Event.destroy_all

e1 = u1.events.create!({
  title: 'International Women\'s Day 2017',
  address: '3360 Victoria Drive, Vancouver',
  lat: 49.255502,
  lng: -123.065428,
  description: '2017 International Women\'s Day celebrate the social, political,
  economic and cultural achievements of women. Please come join us for an evening
   of inclusivity at the Trout Lake Community Centre. We are in need of volunteers so please
   contact us through Karma if you are interested in helping out! Tasks include setup, cleanup mostly and
   the more people the less work!!! Excited to see you all on this monumental day!',
  scheduled_at: 3.days.from_now
})

e2 = u2.events.create!({
  title: 'New Brighton Park Communtiy Clean-up',
  address: '3201 New Brighton Rd, Vancouver',
  lat: 49.289233,
  lng: -123.036204,
  description: 'I am organizing a community clean up for my favourite park in my area that is need of some TLC.
  I am trying to organize at least 15 other communtiy members to help me make this place beautiful again. I will
  provide gloves and garbage bags all you need to do is bring a warm jacket and a positive attitude! Please register
  to this event so I can keep track of numbers and feel free to message me on here if you have any other questions/needs! ',
  scheduled_at: 15.days.from_now
})

e3 = u3.events.create!({
  title: 'Brewery Biking Tour',
  address: '1111 Mainland Street, Vancouver',
  lat: 49.277042,
  lng: -123.120915,
  description: 'Hey everyone I would love to meet new people and have some fun drinking Vancouver
  beer and thought, why not create an event on Karma. I am thinking of starting at Yaletown Brewery
  and making our way out east and ending at Strange Fellows with some other stops inbetween. Theres lots
  see and drink inbetween so it should take around 4 hours. It would be ideal to ride on bikes from one place
  to another. If you don\'t own a bike there are lots of bike rental places around Yaletown you could rent
  one for the day. Please message me on here if you have any other questions. I look forward to many new
  friends and lots of beer',
  end_address: '1345 Clark Dr',
  end_lat: 49.272726,
  end_lng: -123.077807,
  scheduled_at: 20.days.from_now
})

e4 = u4.events.create!({
  title: 'Weekly Sports Meetup',
  address: '1300 Pacific Blvd, Vancouver',
  lat: 49.272231,
  lng: -123.124992,
  description: 'I would love to start a weekly sports meetup at David Lam park. Here is what I have in mind,
  once a week a group of 10-20 people get together to play a mix of soccer, softball, frisbee or whatever else
  we can think of. I am not much for organized sports teams but would love to have a diversity of things to play
  and people to play with. With summer fast approaching I am sure we could change location to English bay
  if anyone really wants to. Let me know on here if anyone has any other ideas for this casual rec sports team.
  I am open to suggestions and and excited to be able to connect to some new people.',
  scheduled_at: 20.days.from_now

})

e5 = u5.events.create!({
  title: 'Slow and Steady Walking Club',
  address: '1669 Johnston St, Vancouver',
  lat: 49.273169,
  lng: -123.135195,
  description: 'Are you wanting to get inshape in a low impact and social way? Do you love wandering through our
  amazing city? I am wanting to start a walking club, and am open to weekly or biweekly walks ranging from 1 to 2
  hours per walk. I am thinking of starting at Granville Island and heading Jerico Beach but I am open to other walking routes!
  Looking for as many people as I can and maybe even integrate other activities into our weekly meetups once
  the ball gets rolling. Excited to meet all of you!!!',
  end_address: '3941 Point Grey Road',
  end_lat: 49.271669,
  end_lng: -123.199782,
  scheduled_at: 17.days.from_now
})




puts "DONE!"

# HELPER_LIST

puts "Re-creating helper_list..."

# HelperList.destroy_all

# HelperList.create!({
#   user: u1,
#   event: e1
# })

puts "DONE!"

# LOCATION

puts "Re-creating location..."

# Location.destroy_all

# Location.create!({
#   user: u5,
#   event: e5,
#   startlat: 49.273169,
#   startlng: -123.135195,
#   endlat: 49.271669,
#   endlng: -123.199782
# })


# Review.destroy_all

# u1.reviews.create!({
#   user: u2,
#   content: "had a really amazing experience with Irina.
#   Really kind person and would work with her agian hands down",
#   rating: 5
# })



puts "DONE"

