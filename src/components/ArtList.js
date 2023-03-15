import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

function ImageModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <img
        height="400px"
        src={props.artURL}
        alt={`A work of art titled ${props.description} by Henry F. Dotson`}
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>{props.description}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            className="modalImage"
            src={props.artURL}
            alt={`A work of art titled ${props.description} by Henry F. Dotson`}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

class ArtList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artList: [
        {
          artURL: "kiss4.png",
          description: "The Kiss"
        },
        {
          artURL: "die1.png",
          description: "Die"
        },
        {
          artURL: "dogs2.png",
          description: "Dog"
        },
        {
          artURL: "monkeyy.png",
          description: "Monkey"
        },
        {
          artURL: "pigeon2.png",
          description: "Pigeon"
        },
        {
          artURL: "professor.png",
          description: "The Professor"
        },
        {
          artURL: "starspangled.png",
          description: "Star Spangled Banner"
        },
        {
          artURL: "time.png",
          description: "TIME Magazine"
        },
        {
          artURL: "canthelp.png",
          description: "Can't Help Falling in Love"
        },
        {
          artURL: "angrygod.png",
          description: "Angry God"
        },
        {
          artURL: "moscow.png",
          description: "Moscow 1972"
        },
        {
          artURL: "soundscape.png",
          description: "Soundscape"
        },
        {
          artURL: "chicken.png",
          description: "Chicken"
        },
        {
          artURL: "beepainting.png",
          description: "Bee"
        },
        {
          artURL: "dove.png",
          description: "Dove"
        },
        {
          artURL: "coyote.png",
          description: "Coyote"
        },
        {
          artURL: "anyone.png",
          description: "Anyone Can Draw!"
        },
        {
          artURL: "999.png",
          description: "This Painting Costs $999.99"
        },
        {
          artURL: "thefreewheelinhenryd+2.png",
          description: "The Freewheelin' henryd"
        },
        {
          artURL: "godblesstheusa+copy.PNG",
          description: "God Bless"
        },
        {
          artURL: "bombfactory2+2.png",
          description: "The Bomb Factory"
        },
        {
          artURL: "cowboy2.png",
          description: "The Cowboy"
        },
        {
          artURL: "cardinal.png",
          description: "Cardinal"
        },
        {
          artURL: "enzocirclepng+copy.png",
          description: "Enso Circle"
        },
        {
          artURL: "planetearth.png",
          description: "Planet Earth (Fuck!)"
        },
        {
          artURL: "willreturn.png",
          description: "Will Return"
        },
        {
          artURL: "bart.png",
          description: "El Barto"
        },
        {
          artURL: "icloudbewrongthough.png",
          description: "I Could Be Wrong"
        },
        {
          artURL: "graffiti.png",
          description: "Please No Graffiti"
        },
        {
          artURL: "thankyou.PNG",
          description: "Thank You!"
        },
        {
          artURL: "yellowbear.png",
          description: "Yellow Bear"
        },
        {
          artURL: "splatter.png",
          description: "Gold Bar - Splatter"
        },
        {
          artURL: "constructionworker.png",
          description: "Curiosity"
        },
        {
          artURL: "Screen+Shot+2021-01-21+at+8.31.50+AM.png",
          description: "Portrait of Anne Frank"
        },
        {
          artURL: "portraitofalady.JPG",
          description: "Portrait of a Lady"
        },
        {
          artURL: "playingcards.PNG",
          description: "Playing Cards"
        },
        {
          artURL: "drone.JPG",
          description: "Airdrop"
        },
        {
          artURL: "ignoranceisstrength.PNG",
          description: "Ignorance is Strength"
        },
        {
          artURL: "fridayafternoon.JPG",
          description: "Friday Afternoon"
        },
        {
          artURL: "haveacompliantday.JPG",
          description: "Have a Compliant Day"
        },
        {
          artURL: "ugh.PNG",
          description: "Ugh."
        },
        {
          artURL: "prehistorictechnology.JPG",
          description: "Prehistoric Technology"
        },
        {
          artURL: "invisibleperson.JPG",
          description: "The Invisible Person"
        },
        {
          artURL: "fortunecookies.PNG",
          description: "Fortune Cookies"
        },
        {
          artURL: "uscapitol.JPG",
          description: "Capitol Building"
        },
        {
          artURL: "sailingship.JPG",
          description: "Sailing Ship"
        },
        {
          artURL: "nationalguard.JPG",
          description: "National Guard"
        },
        {
          artURL: "diagram.JPG",
          description: "Diagram"
        },
        {
          artURL: "thepersistenceofentropy.PNG",
          description: "The Persistence of Entropy"
        },
        {
          artURL: "antarctica.PNG",
          description: "Antarctic"
        },
        {
          artURL: "sisyphis.PNG",
          description: "Sisyphus"
        },
        {
          artURL: "dearleader.JPG",
          description: "Dear Leader"
        },
        {
          artURL: "papercutbreakfast.JPG",
          description: "Paper Cut-Out Breakfast"
        },
        {
          artURL: "milkshakes.JPG",
          description: "Milkshakes"
        },
        {
          artURL: "stealfromtherich.PNG",
          description: "Steal from the Rich"
        },
        {
          artURL: "thespiritoflight.JPG",
          description: "The Spirit of Light"
        },
        {
          artURL: "thecreature.PNG",
          description: "The Creature"
        },
        {
          artURL: "thetear.JPG",
          description: "The Tear"
        },
        {
          artURL: "spacewars.png",
          description: "Space Wars"
        },
        {
          artURL: "thekissposter-768x1024.png",
          description: "The Kiss"
        },
        {
          artURL: "workhorse.PNG",
          description: "Work Horse (Piñata)"
        },
        {
          artURL: "outonthetown.JPG",
          description: "Out on the Town (Pigeon)"
        },
        {
          artURL: "selfie.PNG",
          description: "Selfie"
        },
        {
          artURL: "bowlofsoup.JPG",
          description: "Bowl of Soup"
        },
        {
          artURL: "liftoff.PNG",
          description: "Liftoff"
        },
        {
          artURL: "homer.PNG",
          description: "Mmmm Donut (Homer)"
        },
        {
          artURL: "expectationsvsreality.PNG",
          description: "Expectations vs. Reality"
        },
        {
          artURL: "yearoftheox.JPG",
          description: "Year of the Ox"
        },
        {
          artURL: "bitcoin.png",
          description: "Wealth (Bitcoin)"
        },
        {
          artURL: "valentines.PNG",
          description: "Valentines"
        },
        {
          artURL: "solarsystem.png",
          description: "Solar System"
        },
        {
          artURL: "americanpostgothic.JPG",
          description: "American Post-Gothic"
        },
        {
          artURL: "studyonneutralmilkhotel.PNG",
          description: "Study on Neutral Milk Hotel (In the Aeroplane Over the Sea)"
        },
        {
          artURL: "walterscube.JPG",
          description: "Walter's Cube"
        },
        {
          artURL: "graffitiisfun.png",
          description: "Graffiti is Fun"
        },
        {
          artURL: "stimmy.png",
          description: "Stimulus Check"
        },
        {
          artURL: "goldbarstripe2.png",
          description: "Gold Bar - Racing Stripe"
        },
        {
          artURL: "thefactory.PNG",
          description: "The Factory"
        },
        {
          artURL: "thehen.PNG",
          description: "The Hen"
        },
        {
          artURL: "che.png",
          description: "Guerrillero"
        },
        {
          artURL: "goosegame.png",
          description: "Goose Game"
        },
        {
          artURL: "bartsketch.png",
          description: "I Did Not Go To Art School"
        },
        {
          artURL: "vaccine1.png",
          description: "Vaccines"
        },
        {
          artURL: "bears.png",
          description: "Grizzly Bears"
        },
        {
          artURL: "caution.PNG",
          description: "Caution!"
        },
        {
          artURL: "placebo.png",
          description: "Placebo"
        },
        {
          artURL: "starling.JPG",
          description: "Starling"
        },
        {
          artURL: "thekarenthumb.JPG",
          description: "The Karen"
        },
        {
          artURL: "letthemeatcake.PNG",
          description: "Let Them Eat Cake!"
        },
        {
          artURL: "sleepingdog.PNG",
          description: "Sleeping Dog"
        },
        {
          artURL: "tornado.JPG",
          description: "Tornado"
        },
        {
          artURL: "dino.png",
          description: "Fall of the Dinosaurs"
        },
        {
          artURL: "happymeal.JPG",
          description: "Happy Meal"
        },
        {
          artURL: "louisiana2005.JPG",
          description: "Louisiana 2005"
        },
        {
          artURL: "sundayschool.JPG",
          description: "Sunday School"
        },
        {
          artURL: "checkup.JPG",
          description: "Checkup"
        },
        {
          artURL: "solitaryconfinement.JPG",
          description: "Solitary Confinement (Spongebob)"
        },
        {
          artURL: "familyvacation.png",
          description: "Family Vacation"
        },
        {
          artURL: "squawkingcrow.png",
          description: "The Squawking Crow"
        },
        {
          artURL: "knuckles2.png",
          description: "Nerf Gun Cowgirl"
        },
        {
          artURL: "9B5629F6-0D4D-4AF4-AB83-2CCEC795EA3A",
          description: "henryd Gold Bar/Butter Sticker Pack!"
        },
        {
          artURL: "Disappointment.png",
          description: "Disappointment"
        },
        {
          artURL: "copier.PNG",
          description: "Copier"
        },
        {
          artURL: "hauntedforest.PNG",
          description: "The Haunted Forest"
        },
        {
          artURL: "IMG_1779.PNG",
          description: "Airplane: Piper Cub"
        },
        {
          artURL: "goodmornin.png",
          description: "Good Mornin'"
        },
        {
          artURL: "room3.PNG",
          description: "Interior Design"
        },
        {
          artURL: "9F3FDCDE-A453-4E3F-80CE-C74ECAB2CE2C.JPG",
          description: "VanGogh™"
        },
        {
          artURL: "0CD0034D-C3FF-4048-BD0B-8B676C8FB0A7.JPG",
          description: "Homesick Alien"
        },
        {
          artURL: "bikeride.png",
          description: "Bike Ride"
        },
        {
          artURL: "stopresisting.png",
          description: "Stop Resisting"
        },
        {
          artURL: "mtrainier.png",
          description: "Mt. Rainier"
        },
        {
          artURL: "franklin1.PNG",
          description: "Benjamin Franklin"
        },
        {
          artURL: "bourdain2.PNG",
          description: "Anthony Bourdain"
        },
        {
          artURL: "ninasimone1.PNG",
          description: "Nina Simone"
        },
        {
          artURL: "washingtondc.png",
          description: "Washington, DC"
        },
        {
          artURL: "fruits5.png",
          description: "Fruits"
        },
        {
          artURL: "americanidiot.PNG",
          description: "Don't Wanna be an American Idiot"
        },
        {
          artURL: "deliverydriver.PNG",
          description: "Delivery Driver"
        },
        {
          artURL: "fieldtrip.png",
          description: "Field Trip"
        },
        {
          artURL: "ikea.PNG",
          description: "IKEA Instructions"
        },
        {
          artURL: "becauseisaidso.png",
          description: "Because I Said So"
        },
        {
          artURL: "pokemongo.PNG",
          description: "Pokémon Go"
        },
        {
          artURL: "officework.png",
          description: "Office Worker"
        },
        {
          artURL: "choicecuts.PNG",
          description: "Choice Cuts"
        },
        {
          artURL: "violation.PNG",
          description: "Violation"
        },
        {
          artURL: "nevergrowold.JPG",
          description: "Never Grow Old"
        },
        {
          artURL: "murdermostfowl.JPG",
          description: "Murder Most Fowl"
        },
        {
          artURL: "bobdylan.png",
          description: "Bob Dylan"
        },
        {
          artURL: "devilandangel.png",
          description: "Two Sides"
        },
        {
          artURL: "Feedingtime.png",
          description: "Feeding Time"
        },
        {
          artURL: "39633DDB-9757-4448-95A0-785AE5911E1E",
          description: "Susan’s Dog Cow"
        },
        {
          artURL: "starspangled.png",
          description: "Star Spangled Banner"
        },
        {
          artURL: "oasis.png",
          description: "Oasis"
        },
        {
          artURL: "toyhelicoptertakeoff.png",
          description: "Toy Helicopter Takeoff"
        },
        {
          artURL: "thetragedy.png",
          description: "The Tragedy"
        },
        {
          artURL: "helloimstressed.png",
          description: "Hello I'm Stressed"
        },
        {
          artURL: "fairygodparent.png",
          description: "Fairy God Parent"
        },
        {
          artURL: "theexperiment.png",
          description: "The Experiment"
        },
        {
          artURL: "snackbreak.png",
          description: "Snack Break"
        },
        {
          artURL: "endlessscroll.png",
          description: "Endless Scroll"
        },
        {
          artURL: "bigcheese.png",
          description: "Big Cheese"
        },
        {
          artURL: "einstein.png",
          description: "Einstein"
        },
        {
          artURL: "thepopeandtheplate.png",
          description: "The Pope and the Plate"
        },
        {
          artURL: "icecream.png",
          description: "Ice Cream"
        },
        {
          artURL: "freeasabird.PNG",
          description: "Free as a Bird"
        },
        {
          artURL: "cellohero.png",
          description: "Cello Hero"
        },
        {
          artURL: "D66E3360-C5EA-49C6-BE0C-83D38874A9AB.JPG",
          description: "All Things Must Pass"
        },
        {
          artURL: "ghostsandfireflies.JPG",
          description: "Ghosts and Fireflies"
        },
        {
          artURL: "theater.png",
          description: "Theater"
        },
        {
          artURL: "rollercoaster.png",
          description: "Roller Coaster"
        },
        {
          artURL: "monkeygame.png",
          description: "Monkey Game"
        },
        {
          artURL: "CE5B6201-D0A7-4320-838F-4AE33ACF0589.JPG",
          description: "Sleeping Bear"
        },
        {
          artURL: "3D9CA4F3-DD76-4766-B23A-7F248E894A33.JPG",
          description: "Middle Class Memories"
        },
        {
          artURL: "cows.png",
          description: "Cows"
        },
        {
          artURL: "A5109ABC-A616-4307-AAC9-FC5E3A2BC3E1.JPG",
          description: "Thomas and the Tracks"
        },
        {
          artURL: "8BBAA1BF-EBDF-4A89-9060-D105DBFF7DE9+2.JPG",
          description: "Bottle Rocket"
        },
        {
          artURL: "candybandit.png",
          description: "Candy Bandit"
        },
        {
          artURL: "tacotruck.png",
          description: "Taco Truck"
        },
        {
          artURL: "archaeologist.png",
          description: "Archeologist"
        },
        {
          artURL: "spiritofthenight.png",
          description: "The Spirit of the Night"
        },
        {
          artURL: "flammable.png",
          description: "Flammable"
        },
        {
          artURL: "Screen+Shot+2021-07-16+at+11.38.08+AM.png",
          description: "American Hologram"
        },
        {
          artURL: "2B057D1B-2BE0-4B3B-9DED-A471E25CDA32.JPG",
          description: "Good Kitty"
        },
        {
          artURL: "goat.PNG",
          description: "GOAT"
        },
        {
          artURL: "400AA296-0308-4FF6-B369-5CC0934FD2BE.JPG",
          description: "Beach Trip"
        },
        {
          artURL: "51FC1EA9-06CF-450B-9968-446D269CF5C6.JPG",
          description: "Art Critics"
        },
        {
          artURL: "glasses.PNG",
          description: "Broken"
        },
        {
          artURL: "firepainter.png",
          description: "Firepainter"
        },
        {
          artURL: "cafe.png",
          description: "Café"
        },
        {
          artURL: "8C29BC06-2060-43DF-9CE7-E36DD46D2CCD.JPG",
          description: "Mama Dog and Pups"
        },
        {
          artURL: "justdoit.JPG",
          description: "Just Do It"
        },
        {
          artURL: "timedoesntstop.JPG",
          description: "Time Doesn't Stop"
        },
        {
          artURL: "animalshelter.PNG",
          description: "Animal Shelter"
        },
        {
          artURL: "76DFF800-AB3E-4355-B214-C15994F3969C",
          description: "El Luchador"
        },
        {
          artURL: "typewriter.png",
          description: "Remember Me"
        },
        {
          artURL: "homedecor.JPG",
          description: "Home Decor"
        },
        {
          artURL: "hunter.JPG",
          description: "Hunter"
        },
        {
          artURL: "ninjashot.JPG",
          description: "Ninja Shot"
        },
        {
          artURL: "C4670E25-9BCF-4EF8-8BC4-5BD462E793F6.JPG",
          description: "The Game of Justice"
        },
        {
          artURL: "cybertruckhell.JPG",
          description: "Cybertruck Hell"
        },
        {
          artURL: "finances.JPG",
          description: "Finances"
        },
        {
          artURL: "bonsaibot.PNG",
          description: "Bonsai Bot"
        },
        {
          artURL: "phillyskyline.JPG",
          description: "Philly Skyline"
        },
        {
          artURL: "hungrybear.JPG",
          description: "Hungry Bear"
        },
        {
          artURL: "BD36B56D-EBC0-45B0-BE82-199B5FA983D8.JPG",
          description: "Brain Fog"
        },
        {
          artURL: "solarsystem.JPG",
          description: "Solar System"
        },
        {
          artURL: "lego-5.png",
          description: "LEGO Minifigure"
        },
        {
          artURL: "needbanana.JPG",
          description: "Need Banana"
        },
        {
          artURL: "sunrisebeach.JPG",
          description: "Sunrise Beach"
        },
        {
          artURL: "scaredycat.PNG",
          description: "Scaredy Cat"
        },
        {
          artURL: "F4192FD6-F8BC-4C42-BFFF-DC361C179B70.JPG",
          description: "LOVE"
        },
        {
          artURL: "mousemaze.png",
          description: "Mouse Maze"
        },
        {
          artURL: "BAE76D54-07B0-401D-8CA7-43B4E06923EF.JPG",
          description: "Rabbit"
        },
        {
          artURL: "sneakerconcept.png",
          description: "Sneaker Concept"
        },
        {
          artURL: "livelaughdie.png",
          description: "Live, Laugh, Die"
        },
        {
          artURL: "buy.PNG",
          description: "BUY!"
        },
        {
          artURL: "ragequit.png",
          description: "Rage Quit"
        },
        {
          artURL: "pleasecharge.png",
          description: "Please Charge"
        },
        {
          artURL: "realization.png",
          description: "The Realization"
        },
        {
          artURL: "giantseagull.png",
          description: "Giant Seagull"
        },
        {
          artURL: "doormat.png",
          description: "Doormat"
        },
        {
          artURL: "blockprint3.png",
          description: "Match"
        },
        {
          artURL: "blockprint2.png",
          description: "Lighter"
        },
        {
          artURL: "blockprint1.png",
          description: "Extinguisher"
        },
        {
          artURL: "pixelfire.png",
          description: "Pixel Fire"
        },
        {
          artURL: "targetpractice.png",
          description: "Target Practice"
        },
        {
          artURL: "painter1.png",
          description: "The Artist"
        },
        {
          artURL: "snocone.PNG",
          description: "Sno-cone"
        },
        {
          artURL: "virusvsvaccine.png",
          description: "Virus vs. Vaccine"
        },
        {
          artURL: "cupnoodle.png",
          description: "Cup Noodles"
        },
        {
          artURL: "studyonbreakfast.png",
          description: "Study on Breakfast"
        },
        {
          artURL: "D38EEAFE-4192-4EDB-8F38-ADB93D1B7A2E.JPG",
          description: "Satellite"
        },
        {
          artURL: "45784C62-4D43-4C67-8E05-9BA6629A0123.JPG",
          description: "Loon"
        },
        {
          artURL: "horchata.png",
          description: "Horchata"
        },
        {
          artURL: "spyware.png",
          description: "Watch for Spyware"
        },
        {
          artURL: "bellyflop1.png",
          description: "Bellyflop"
        },
        {
          artURL: "jazz.png",
          description: "Cool Jazz"
        },
        {
          artURL: "boba3.png",
          description: "Boba: Set of 4"
        },
        {
          artURL: "outofideas.png",
          description: "Out of Ideas"
        },
        {
          artURL: "catnapbowiesdream.png",
          description: "Cat Nap"
        },
        {
          artURL: "recordplayer1.png",
          description: "Record Player"
        },
        {
          artURL: "cheerleader.PNG",
          description: "Cheerleader"
        },
        {
          artURL: "battle.png",
          description: "Battle"
        },
        {
          artURL: "antibiotics.png",
          description: "Antibiotics"
        },
        {
          artURL: "hunter-diana.png",
          description: "Hunter - Diana"
        },
        {
          artURL: "pearl.PNG",
          description: "Pearl Earring"
        },
        {
          artURL: "clownfish.png",
          description: "Clownfish"
        },
        {
          artURL: "themelt.JPG",
          description: "The Melt"
        },
        {
          artURL: "horizon.PNG",
          description: "Horizon"
        },
        {
          artURL: "iwillnot.PNG",
          description: "I Will Not (Set of 2)"
        },
        {
          artURL: "ancienttale.png",
          description: "Ancient Tale"
        },
        {
          artURL: "tiger.JPG",
          description: "Tiger"
        },
        {
          artURL: "taxi.png",
          description: "Taxi"
        },
        {
          artURL: "ivehadenough.PNG",
          description: "I've Had Enough"
        },
        {
          artURL: "worker.JPG",
          description: "Worker"
        },
        {
          artURL: "peppercop.PNG",
          description: "Tabasco"
        },
        {
          artURL: "haveagreatday.png",
          description: "Have a Great Day"
        },
        {
          artURL: "citywalkers1.PNG",
          description: "City Walkers"
        },
        {
          artURL: "7548342F-D5C8-4B93-B547-0A9DCD99ACDE.JPG",
          description: "Watch Your Step!"
        },
        {
          artURL: "5C846DA6-E1D8-4D34-9A69-C94C8DCDBA9F.JPG",
          description: "Moon Gazer"
        },
        {
          artURL: "imaginethe2020s.png",
          description: "Imagine the 2020's"
        },
        {
          artURL: "sandsculpture.png",
          description: "Sand Sculpture"
        },
        {
          artURL: "poweredbypiracy.PNG",
          description: "Powered by Piracy"
        },
        {
          artURL: "53399456-757B-4CCE-9E4E-F50B6454DCE0.JPG",
          description: "Still Life - Hungry Snail"
        },
        {
          artURL: "dontgetfired.PNG",
          description: "Don't Get Fired!"
        },
        {
          artURL: "racer.png",
          description: "Racer"
        },
        {
          artURL: "IMG_3924.jpg",
          description: "Cat and Moon"
        },
        {
          artURL: "life1.png",
          description: "Life Cycle"
        },
        {
          artURL: "E7C78750-C5FD-4B6B-9201-A027B7E6C714.JPG",
          description: "Grab n' Go"
        },
        {
          artURL: "fallingapart.png",
          description: "Falling Apart"
        },
        {
          artURL: "entanglement.png",
          description: "Entanglement"
        },
        {
          artURL: "2567B79F-A5CA-41CA-8433-668F21E6233A.JPG",
          description: "Don't Even Try"
        },
        {
          artURL: "theowl.JPG",
          description: "The Owl"
        },
        {
          artURL: "F04D2810-2ED8-405C-AF31-D328E9DDAA64.JPG",
          description: "Robo Buddies"
        },
        {
          artURL: "dry.png",
          description: "Dry"
        },
        {
          artURL: "theleak.PNG",
          description: "The Leak"
        },
        {
          artURL: "diadelosmuertos.PNG",
          description: "Día de muertos"
        },
        {
          artURL: "hotshit.PNG",
          description: "Hot Shit"
        },
        {
          artURL: "serviceworkersinuniform.PNG",
          description: "Service Workers"
        },
        {
          artURL: "bezosgoestospace.PNG",
          description: "Bezos Goes to Space"
        },
        {
          artURL: "detonation.PNG",
          description: "Detonation"
        },
        {
          artURL: "adblocker.PNG",
          description: "Ad-Blocker"
        },
        {
          artURL: "baghead.png",
          description: "Bag Head"
        },
        {
          artURL: "riders.JPG",
          description: "Riders"
        },
        {
          artURL: "alteredstate.PNG",
          description: "Altered State"
        },
        {
          artURL: "egg.PNG",
          description: "Egg"
        },
        {
          artURL: "neighbor.PNG",
          description: "Neighbor"
        },
        {
          artURL: "oceancurrents.PNG",
          description: "Ocean Currents"
        },
        {
          artURL: "donoteat.PNG",
          description: "Do Not Eat"
        },
        {
          artURL: "theflood.PNG",
          description: "The Flood"
        },
        {
          artURL: "disconnection.PNG",
          description: "Disconnection"
        },
        {
          artURL: "conejito1.JPG",
          description: "Conejito"
        },
        {
          artURL: "reagansdream.PNG",
          description: "Reagan's Dream"
        },
        {
          artURL: "skatergirl.PNG",
          description: "Skater Girl"
        },
        {
          artURL: "grabandrun.PNG",
          description: "Grab and Run"
        },
        {
          artURL: "nobodyknows.PNG",
          description: "Nobody Knows"
        },
        {
          artURL: "shutdown.png",
          description: "Shut Down"
        },
        {
          artURL: "fatedestiny.JPG",
          description: "Fate/Destiny"
        },
        {
          artURL: "fulfillment.JPG",
          description: "Fulfillment"
        },
        {
          artURL: "meltdown.PNG",
          description: "Meltdown"
        },
        {
          artURL: "metaverse.PNG",
          description: "Metaverse"
        },
        {
          artURL: "pastel.png",
          description: "Pastel"
        },
        {
          artURL: "stilllifebooster.PNG",
          description: "Still Life With Booster"
        },
        {
          artURL: "quicksand.PNG",
          description: "Quicksand"
        },
        {
          artURL: "unattendedflame.PNG",
          description: "Unattended Flame"
        },
        {
          artURL: "yourenotthebossofme.JPG",
          description: "Boss of Me"
        },
        {
          artURL: "thirsty.JPG",
          description: "Water Tower"
        },
        {
          artURL: "bewareofdog.JPG",
          description: "Beware of Dog"
        },
        {
          artURL: "boredom.PNG",
          description: "Boredom"
        },
        {
          artURL: "strappedin.JPG",
          description: "Strapped In"
        },
        {
          artURL: "pleasereboot.JPG",
          description: "Please Reboot"
        },
        {
          artURL: "selfiesnake.JPG",
          description: "Selfie Snake"
        },
        {
          artURL: "elon.PNG",
          description: "Elon"
        },
        {
          artURL: "sleighcrash.JPG",
          description: "Sleigh Crash"
        },
        {
          artURL: "detentionfacility.JPG",
          description: "Detention Facility"
        },
        {
          artURL: "floorislava.JPG",
          description: "Floor is Lava"
        },
        {
          artURL: "retirementparty.JPG",
          description: "Retirement Party"
        },
        {
          artURL: "thedoctor.PNG",
          description: "The Doctor"
        },
        {
          artURL: "greenchristmas.png",
          description: "Green Christmas"
        },
        {
          artURL: "seattle.JPG",
          description: "Seattle - City by the Sea"
        },
        {
          artURL: "departure.png",
          description: "Departure"
        },
        {
          artURL: "privatepawn.JPG",
          description: "Private Pawn"
        },
        {
          artURL: "whatever.png",
          description: "Thoughts?"
        },
        {
          artURL: "conspiracy.png",
          description: "Another Year"
        },
        {
          artURL: "trafficjam.png",
          description: "Fender Bender"
        },
        {
          artURL: "scooterderby.PNG",
          description: "Scooter Derby"
        },
        {
          artURL: "greetingsfrom2022.JPG",
          description: "Greetings From 2022"
        },
        {
          artURL: "cabletv.png",
          description: "Cable TV"
        },
        {
          artURL: "cactusflower1.jpg",
          description: "Cactus Flower"
        },
        {
          artURL: "snowynight2.png",
          description: "Snowy Night"
        },
        {
          artURL: "neoncat.png",
          description: "Neon Cat"
        },
        {
          artURL: "burro.JPG",
          description: "Burro"
        },
        {
          artURL: "oldworldnewways.PNG",
          description: "Old World / New Ways"
        },
        {
          artURL: "cavepainting.png",
          description: "Cave Painting"
        },
        {
          artURL: "celebration.PNG",
          description: "Celebration"
        },
        {
          artURL: "teardrop.PNG",
          description: "Teardrop"
        },
        {
          artURL: "artmarket.PNG",
          description: "Art Market"
        },
        {
          artURL: "migrants.PNG",
          description: "Migrants"
        },
        {
          artURL: "goldbar-red.png",
          description: "Gold Bar - Red"
        },
        {
          artURL: "mindblow.PNG",
          description: "Mind Blow"
        },
        {
          artURL: "tenochtitlan.JPG",
          description: "Tenochtitlán"
        },
        {
          artURL: "koipond.JPG",
          description: "Koi Pond"
        },
        {
          artURL: "salute.png",
          description: "Salute"
        },
        {
          artURL: "memberofsociety.png",
          description: "Member of Society"
        },
        {
          artURL: "pressthebutton.PNG",
          description: "Press the Button"
        },
        {
          artURL: "bee1.png",
          description: "Bees"
        },
        {
          artURL: "squirrelthumb.png",
          description: "Squirrel"
        },
        {
          artURL: "outofofficethumb.png",
          description: "Out of Office"
        },
        {
          artURL: "decodancersthumb.png",
          description: "Deco Dancers"
        },
        {
          artURL: "goodbyeblueskythumb.png",
          description: "Goodbye Blue Sky"
        },
        {
          artURL: "brokendreamsthumb.png",
          description: "Broken Dreams"
        },
        {
          artURL: "discusthumb.png",
          description: "Discus"
        },
        {
          artURL: "rollerbladerthumb.png",
          description: "Rollerblader"
        },
        {
          artURL: "realartistthumb.png",
          description: "Real Artist"
        },
        {
          artURL: "scooterparkthumb.png",
          description: "Scooter Park"
        },
        {
          artURL: "brokensystemthumb.png",
          description: "Broken System"
        },
        {
          artURL: "kingsdeadthumb.png",
          description: "King's Dead"
        },
        {
          artURL: "liminalgymthumb.png",
          description: "Liminal Gym"
        },
        {
          artURL: "missingpigeonthumb.png",
          description: "Missing Pigeon"
        },
        {
          artURL: "mangagirlthumb.png",
          description: "Manga Girl"
        },
        {
          artURL: "snakespacethumb.png",
          description: "Snake Space"
        },
        {
          artURL: "trexthumb.png",
          description: "T-Rex"
        },
        {
          artURL: "whitefragilethumb.png",
          description: "White Fragile"
        },
        {
          artURL: "mickeythumb.png",
          description: "Gravedigger"
        },
        {
          artURL: "fileshredderthumb.png",
          description: "File Shredder"
        },
        {
          artURL: "outletthumb.png",
          description: "Outlet"
        },
        {
          artURL: "greatdaythumb.png",
          description: "Have a Great Day!"
        },
        {
          artURL: "trashdayposterthumb.png",
          description: "Trash Day Poster"
        },
        {
          artURL: "gobacktosleepthumb.png",
          description: "Go Back To Sleep"
        },
        {
          artURL: "freshoutthebinthumb.png",
          description: "Fresh Out The Bin!"
        },
        {
          artURL: "catanddogthumb.png",
          description: "Cat and Dog"
        },
        {
          artURL: "rubberduckthumb.png",
          description: "Rubber Duck"
        },
        {
          artURL: "horseracethumb.png",
          description: "Horse Race"
        },
        {
          artURL: "mourningthumb.png",
          description: "Mourning"
        },
        {
          artURL: "anxiousfreakscoffeeclubthumb.png",
          description: "Anxious Freaks Coffee Club"
        },
        {
          artURL: "equaljusticeforsomethumb.png",
          description: "Equal Justice For Some"
        },
        {
          artURL: "rentcheckthumb.png",
          description: "Rent Check"
        },
        {
          artURL: "meetmeontheinternetthumb.png",
          description: "Meet Me On The Internet"
        },
        {
          artURL: "skipworkgopartythumb.png",
          description: "Skip Work! Go Party!"
        },
        {
          artURL: "meditationthumb.png",
          description: "Meditation"
        },
        {
          artURL: "meltingthumb.png",
          description: "Melting"
        },
        {
          artURL: "nrathumb.png",
          description: "NRA"
        },
        {
          artURL: "whatkindofvibethumb.png",
          description: "What Kind of Vibe?"
        },
        {
          artURL: "fromthegravethumb.png",
          description: "From the Grave"
        },
        {
          artURL: "dreamerthumb.png",
          description: "Dreamer"
        },
        {
          artURL: "wasntmethumb.png",
          description: "Wasn't Me!"
        },
        {
          artURL: "climatechangedthumb.png",
          description: "Climate Changed"
        },
        {
          artURL: "sonicsaysthumb.png",
          description: "Sonic Says"
        },
        {
          artURL: "escapethumb.png",
          description: "Escape"
        },
        {
          artURL: "jazzthumb.png",
          description: "Jazz"
        },
        {
          artURL: "eternitysquare.png",
          description: "Eternity"
        },
        {
          artURL: "ithinkthereforeiamsquare.png",
          description: "I Think Therefore I Am"
        },
        {
          artURL: "coloringbookcastlethumb.png",
          description: "Coloring Book Castle"
        },
        {
          artURL: "treehead.png",
          description: "Tree Head"
        },
        {
          artURL: "hoseoff.png",
          description: "Hose Off"
        },
        {
          artURL: "weddingpop.png",
          description: "Wedding Pop"
        },
        {
          artURL: "glasshouse.png",
          description: "Glass House"
        },
        {
          artURL: "everythingis.png",
          description: "Everything Is"
        },
        {
          artURL: "pureevil.png",
          description: "Pure Evil"
        },
        {
          artURL: "topple.png",
          description: "Topple"
        },
        {
          artURL: "impostersquare.png",
          description: "Imposter"
        },
        {
          artURL: "dancewithdeath.png",
          description: "Dance with Death"
        },
        {
          artURL: "mushyossquare.png",
          description: "Mushy-O's"
        },
        {
          artURL: "thecollapsesquare.png",
          description: "The Collapse"
        },
        {
          artURL: "monkeyjudgesquare.png",
          description: "Monkey Judge"
        },
        {
          artURL: "floweytheflowersquare.png",
          description: "Flowey the Flower"
        },
        {
          artURL: "giveitupsquare.png",
          description: "Give It Up"
        },
        {
          artURL: "memoriesofmtrainier.png",
          description: "Memories of Mount Rainier"
        },
        {
          artURL: "sashimisquare.png",
          description: "Sashimi"
        },
        {
          artURL: "chiefsquare.png",
          description: "Chief"
        },
        {
          artURL: "thelonelyghostsquare.png",
          description: "The Lonely Ghost"
        },
        {
          artURL: "shootoutsquare.png",
          description: "Shootout"
        },
        {
          artURL: "floatysquare.png",
          description: "Floaty"
        },
        {
          artURL: "mammamiasquare.png",
          description: "Mamma Mia!"
        },
        {
          artURL: "porksquare.png",
          description: "Pork"
        },
        {
          artURL: "pandorasquare.png",
          description: "Pandora"
        },
        {
          artURL: "phonechargersquare.png",
          description: "Phone Charger"
        },
        {
          artURL: "linktothepastsquare.png",
          description: "Link to the Past"
        },
        {
          artURL: "abductionsquare.png",
          description: "Abduction"
        },
        {
          artURL: "marblessquare.png",
          description: "Marbles"
        },
        {
          artURL: "letsrollsquare.png",
          description: "Let's Roll"
        },
        {
          artURL: "wildhorsessquare.png",
          description: "Wild Horses"
        },
        {
          artURL: "arthistorysquare.png",
          description: "Art History"
        },
        {
          artURL: "youresodamnhotsquare.png",
          description: "You're So Damn Hot"
        },
        {
          artURL: "8bitgoldbarsquare.png",
          description: "8-bit Gold Bar"
        },
        {
          artURL: "socoolsquare.png",
          description: "So Cool"
        },
        {
          artURL: "businessmansquare.png",
          description: "Businessman"
        },
        {
          artURL: "smilesquare.png",
          description: "Smile"
        },
        {
          artURL: "whoopssquare.png",
          description: "Whoops"
        },
        {
          artURL: "shadowpuppiessquare.png",
          description: "Shadow Puppies"
        },
        {
          artURL: "liminalzonesquare.png",
          description: "Liminal Zone"
        },
        {
          artURL: "archbishopsquare.png",
          description: "Archbishop"
        },
        {
          artURL: "goodmorningsquare.png",
          description: "Good Morning!"
        },
        {
          artURL: "strawberryshakesquare.png",
          description: "Strawberry Shake"
        },
        {
          artURL: "breakfastbuddiessquare.png",
          description: "Breakfast Buddies"
        }
      ]
    };
  }

  render() {
    return (
      <LazyLoadComponent>
      <div>
        {this.state.artList.reverse().map((artPiece, index) => {
          return (
              <div className="artCard" key={index}>
              <ImageModal
                artURL={`/images/art/${artPiece.artURL}`}
                description={artPiece.description}
                className="artImage"
              />
                  <p>{artPiece.description}</p>
              </div>
          );
        })}
      </div>
      </LazyLoadComponent>
    );
  }
}

export default ArtList;