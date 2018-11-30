# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: 'dantheman125232')
User.create(username: 'maxmillion232525')
User.create(username: 'wangatron1')
User.create(username: 'scubasteve02312')
User.create(username: 'thePowerfulMikeChang')
User.create(username: 'chromeboiiiiiii')

Product.create(name: "Jordan Retro High Off-White Blue", description:"Time for some Tobacco Road vibes with these Jordan 1 Retro Off-Whites. Also known as the “UNC” editions, these Jordan 1s are the third colorway designed by Virgil Abloh and made in collaboration with his Off-White label. The sneakers come in a white, dark powder blue and cone colorway, with a white and blue deconstructed leather upper and Off-White detailing throughout. If you’re a fan of Virgil Abloh’s work and want to rep Off-White, this pair is another must-have." , price: 865, image_url: 'https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Off-White-University-Blue/Images/Air-Jordan-1-Retro-High-Off-White-University-Blue/Lv2/img01.jpg?auto=format,compress&w=1117&q=90', size: '9')

Product.create(name: "Jordan Retro Travis Scott Cactus Jack", description:"The only way to describe the Travis Scott Air Jordan 4 Retros properly would be to use the rappers own adlib: la flame. These Jordan 4s were made in collaboration with rapper, Travis Scott and nicknamed the “Cactus Jack” edition. Similar in design to the infamous Eminem pair, these feature a lighter shade of blue suede on the upper. Black accents, a red liner, paint splatter detailing, a white midsole and “Cactus Jack” branding on the back heel tab finish things off for this pair. These dropped in June of 2018 for $225 and came exclusively in men’s sizes. If you’re a fan of Travis Scott and the AJ 4, this pair is another must-have. Straight up!" , price: 315, image_url: 'https://stockx-360.imgix.net/Air-Jordan-4-Retro-Travis-Scott-Cactus-Jack/Images/Air-Jordan-4-Retro-Travis-Scott-Cactus-Jack/Lv2/img01.jpg?auto=format,compress&w=1117&q=90', size:'10')

Product.create(name: "Jordan Retro High Off-White White", description:"After Virgil Abloh & Nike’s 2017 “Chicago” edition Air Jordan I, an all-white version arrived in March 2018 as a European exclusive, leaving sneakerheads in the rest of the world yearning for a pair. First debuting on the OFF-WHITE runway at Paris Fashion Week, the ultra-clean rendition featured the same well-appointed details as the first, simply boasting a more pared-down colorway that created almost the same levels of buzz as the first release." , price: 1725, image_url: 'https://stockx-360.imgix.net/air-jordan-1-retro-high-off-white-white_TruView/Images/air-jordan-1-retro-high-off-white-white_TruView/Lv2/img01.jpg?auto=format,compress&w=1117&q=90', size:'8')

Product.create(name: "Yeezy Boost 350 V2 Blue Tint", description:"If you're looking for the pair that Kanye claimed jumped over the jumpman, look no further than the ultra-popular adidas Yeezy Boost 350 V2 Blue Tint colorway. Like previous releases, the Blue Tint Yeezy Boost is made up of a Primeknit based upper and features the Zebra like striped pattern across the upper. These shoes also feature adidas' now famous Boost cushioning that became the go-to for many sneakerheads over the past few years due to its incredible comfort." , price: 385, image_url: 'https://stockx-360.imgix.net/Adidas-Yeezy-Boost-350-V2-Blue-Tint/Images/Adidas-Yeezy-Boost-350-V2-Blue-Tint/Lv2/img01.jpg?auto=format,compress&w=1117&q=90', size:'7')

Product.create(name: "Supreme Comme Des Garcons SHIRT Box Logo Hooded Sweatshirt Black", description:"Season: SS17, Color: Black" , price: 725, image_url: 'https://stockx.imgix.net/products/streetwear/Supreme-Comme-Des-Garcons-SHIRT-Box-Logo-Hooded-Sweatshirt-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color', size:'medium')

Product.create(name: "Supreme Box Logo Hooded Sweatshirt Black", description:"Season: FW16, Color: Black" , price: 1500, image_url: 'https://stockx.imgix.net/products/streetwear/Supreme-Box-Logo-Hooded-Sweatshirt-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color', size:'small')

Product.create(name: "Yeezy Boost 350 V2 Zebra", description:"Adidas is back with their latest Yeezy Boost 350 V2. Fresh off the heels of NBA All-Star Weekend, these Yeezy's are nicknamed the Zebras, and come in a classic white, black and red color scheme. Sporting a white-based Primeknit upper with black accents giving off a Zebra stripe vibe, “SPLY-350” displayed across the sides in red finished off by a translucent BOOST cushioned sole. To date they are the most limited adidas Yeezy release and have instantly become one of the most popular colorways." , price: 370, image_url: 'https://stockx-360.imgix.net/Adidas-Yeezy-Boost-350-V2-Zebra/Images/Adidas-Yeezy-Boost-350-V2-Zebra/Lv2/img01.jpg?auto=format,compress&w=1117&q=90', size:'6')

Product.create(name:"Denary Jacket X Concepts", description:"The Denary Jacket celebrates ten years of partnership between Canada Goose and Boston-born Concepts. Nodding to tactical function and design inspired by the Canada Goose archives, the Denary Jacket is crafted from lightweight ISO Peak 2L fabric and features grip tape patches on each sleeve for customization. The Denary Jacket is activated by light in low-visibility conditions on the interior and exterior of the jacket.", price: 1225, size:'Large', image_url: "https://images.canadagoose.com/image/upload/c_scale,f_auto,q_auto:best,w_480/product-image/2028MCA_61.jpg")


#      t.string :name
      #t.string :description
      #t.integer :price
      #t.string :size
