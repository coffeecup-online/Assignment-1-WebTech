//GLOBALS
let selectedSection = "body";
let selectedStyle = "fontSize";
// CLASSES
class CreativeWork {
    constructor(
        authors,
        year,
        bookTitle
    ) {
        this.authors = authors;
        this.year = year;
        this.bookTitle = bookTitle;
    }
}
class Person {
  constructor(
    name,
    birthyear,
    
  ) {
    this.name = name;
    this.birthyear = birthyear;
  }
}

class Company {
    constructor(
        name,
        wiki,
    ) {
        this.name = name;
        this.wiki = wiki;
    }
}

class Publisher extends Company {
    constructor(
        name,
        wiki,
        titles,
        image
    ) {
        super(name,wiki);
        this.titles = titles;
        this.image = image
    }
}

class Book extends CreativeWork {
    constructor(
        authors,
        year,
        bookTitle,
        genre,
        Publisher,
        cover,
        plot
        
    ) {
        super(authors,year,bookTitle);
        this.genre = genre;
        this.Publisher = Publisher;
        this.cover = cover;
        this.plot = plot;
    }
}

class Author  extends Person    {
  constructor(
    name,
    birthyear,
    titles,
    wiki,
    image
  ) {
    super(name,birthyear);
    this.titles = titles;
    this.wiki = wiki;
    this.image = image
  }
}


const NTEF = new Book(
    [
      new Author(
        "George Orwell",
        1903,
        ["Nineteen Eighty-Four",
        "Animal Farm",
        "Homage to Catalonia",
        "The Road to Wigan Pier"],
        "https://en.wikipedia.org/wiki/George_Orwell",
        "https://www.hiperbolajanus.com/images/firmas/george-orwell_huc9559343339cd652fffb91c38c299d2b_6854551_256x256_fill_q75_h2_box_smart1.webp"
      )
    ],
    1954,
    "1984",
    "Dystopian",

    [new Publisher(
      "Secker & Warburg",
      "https://en.wikipedia.org/wiki/Harvill_Secker",
      ["1984",
      "Animal Farm",
      "Homage to Catalonia",
      "Minty Alley"],
      "https://www.modernistarchives.com/files/styles/large/public/harvill_1_2.jpg"
    )],
    "./assets/pictures/cover.jpg",
    "The story takes place in an imagined future in an unspecified year believed to be 1984, when much of the world is in perpetual war. Great Britain, now known as Airstrip One, has become a province of the totalitarian superstate Oceania, which is led by Big Brother, a dictatorial leader supported by an intense cult of personality manufactured by the Party's Thought Police. The Party engages in omnipresent government surveillance and, through the Ministry of Truth, historical negationism and constant propaganda to persecute individuality and independent thinking. The protagonist, Winston Smith, is a diligent mid-level worker at the Ministry of Truth who secretly hates the Party and dreams of rebellion. Smith keeps a forbidden diary. He begins a relationship with a colleague, Julia, and they learn about a shadowy resistance group called the Brotherhood. However, their contact within the Brotherhood turns out to be a Party agent, and Smith and Julia are arrested. He is subjected to months of psychological manipulation and torture by the Ministry of Love and is released once he has come to love Big Brother."
)

console.log(Book);

//FUNCTIONS

// Create Section Select Menu
const createSectionMenu = () => {
    const selectSectionBox = document.createElement("select");
    selectSectionBox.classList = "menu selectSectionBox";
  
    const sectionOption1 = document.createElement("option");
    sectionOption1.value = "body";
    sectionOption1.text = "body";
  
    const sectionOption2 = document.createElement("option");
    sectionOption2.value = "header";
    sectionOption2.text = "header";
  
    const sectionOption3 = document.createElement("option");
    sectionOption3.value = "section";
    sectionOption3.text = "section";
  
    const sectionOption4 = document.createElement("option");
    sectionOption4.value = "article";
    sectionOption4.text = "article";
  
    const sectionOption5 = document.createElement("option");
    sectionOption5.value = "footer";
    sectionOption5.text = "footer";
  
    selectSectionBox.add(sectionOption1);
    selectSectionBox.add(sectionOption2);
    selectSectionBox.add(sectionOption3);
    selectSectionBox.add(sectionOption4);
    selectSectionBox.add(sectionOption5);
  
    return selectSectionBox;
  };
  
  // Create Style Slect Menu
  const createStyleMenu = () => {
    const selectStyleBox = document.createElement("select");
    selectStyleBox.classList = "menu selectStyleBox";
  
    const option1 = document.createElement("option");
    option1.value = "Delarge";
    option1.text = "Delarge FontSize";
  
    const option2 = document.createElement("option");
    option2.value = "Enlarge";
    option2.text = "Enlarge FontSize";
  
    const option3 = document.createElement("option");
    option3.value = "DarkMode";
    option3.text = "Dark Mode";
  
    const option4 = document.createElement("option");
    option4.value = "LightMode";
    option4.text = "Light Mode";
  
    selectStyleBox.add(option1);
    selectStyleBox.add(option2);
    selectStyleBox.add(option3);
    selectStyleBox.add(option4);
  
    return selectStyleBox;
  };
  
  // select section
  const SelectSection = (e) => {
    let section = e.target.value;
  
    switch (section) {
      case "body":
        selectedSection = section;
        break;
  
      case "header":
        selectedSection = section;
        break;
  
      case "article":
        selectedSection = section;
        break;
  
      case "section":
        selectedSection = section;
        break;
  
      case "footer":
        selectedSection = section;
        break;
    }
  };
  
  // change style
  const ChangeStyle = (e) => {
    selectedStyle = e.target.value;
    let appliedSection = document.querySelector(selectedSection);
  
    switch (selectedStyle) {
      case "Enlarge":
        appliedSection.style.fontSize = "1.5rem";
        break;
  
      case "Delarge":
        appliedSection.style.fontSize = "1rem";
        break;
  
      case "DarkMode":
        appliedSection.style.backgroundColor = "black";
        appliedSection.style.color = "white";
        break;
  
      case "LightMode":
        appliedSection.style.backgroundColor = "white";
        appliedSection.style.color = "black";
        break;
    }
  };






//create tooltip

const insertTooltip = (e) => {
  if (e.target.classList.value.includes("tooltip-container")) {
    let p;

    if (e.target.classList.value.includes("bookAuthor")) {
      p = NTEF.authors.filter((item) =>
        e.target.classList.value.includes(item.name)
      );
    }
    if (e.target.classList.value.includes("bookPublisher")) {
      p = NTEF.Publisher.filter((item) =>
        e.target.classList.value.includes(item.name)
      );
    }

    try {
      //div.tooltip
      let tooltip = document.createElement("div");
      tooltip.classList = "tooltipBox";

      let img = document.createElement("img");
      imgUrl = p[0].image;
      img.setAttribute("src", imgUrl);
      img.setAttribute("alt", "Author / Publisher image");
      img.setAttribute("width", "280px");
      img.setAttribute("height", "320px");
      tooltip.appendChild(img);

      let p1 = document.createElement("p");
      p1.classList = "p-name-tooltip";
      p1.innerText = p[0].name;
      tooltip.appendChild(p1);

      if (p[0].birthyear != undefined){
        let p2 = document.createElement("p");
        p2.innerText = "Born: " + p[0].birthyear;
        tooltip.appendChild(p2);
      }

      let p3 = document.createElement("p");
      p3.innerText = "Other Titles";
      tooltip.appendChild(p3);

      let ul = document.createElement("ul");
      let list = p[0].titles;

      for (let i = 0; i < list.length; i++) {
        let li = document.createElement("li");
        li.innerText = list[i];
        ul.appendChild(li);
      }
      tooltip.appendChild(ul);


      e.target.appendChild(tooltip);
    } catch (error) {}
  }
};

const deleteTooltip = (e) => {
  try {
    const tooltipContainer = e.target;
    let tooltip = tooltipContainer.querySelector(".tooltipBox");
    tooltipContainer.removeChild(tooltip);
  } catch (error) {}
};



window.onload = () => {
  const header = document.querySelector("header");
  const body = document.querySelector("body");
  const footer = document.querySelector("footer");
  const headerMenu = document.createElement("div");
  headerMenu.classList = "headerMenu";

  headerMenu.appendChild(createSectionMenu());
  headerMenu.appendChild(createStyleMenu());
  header.parentNode.insertBefore(headerMenu, header.nextSibling);
  const mainElem = document.createElement("main");

  const bannerElem = document.createElement("div");
  bannerElem.classList = "banner";

  const bannerOverlayElem = document.createElement("div");
  bannerOverlayElem.classList = "banner_overlay";

  const headingElem = document.createElement("h2");
  headingElem.textContent = "Info";

  bannerOverlayElem.appendChild(headingElem);
  bannerElem.appendChild(bannerOverlayElem);
  mainElem.appendChild(bannerElem);

  body.insertBefore(mainElem, footer);

  const Booksection = document.createElement("section")
  const articleSection = document.createElement("article");

  const cover = document.createElement("img")
  cover.classList = "cover";
  cover.setAttribute("src", NTEF.cover);
  cover.setAttribute("alt", "book cover");
  cover.height = 300;
  cover.width = 300;

  Booksection.appendChild(cover);



  // Insert Book Info to Article
  const bookHeader = document.createElement("h2");
  bookHeader.innerText = NTEF.bookTitle;
  articleSection.appendChild(bookHeader);

  const bookYear = document.createElement("span");
  bookYear.classList = "year";
  bookYear.innerText = NTEF.year;
  articleSection.appendChild(bookYear);

  const bookGenre = document.createElement("span");
  bookGenre.classList = "genre";
  bookGenre.innerText = NTEF.genre;
  articleSection.appendChild(bookGenre);



  const bookPlot = document.createElement("p");
  bookPlot.classList = "plot";
  bookPlot.innerText = NTEF.plot;
  articleSection.appendChild(bookPlot);

    /// Author

    const bookAuthor = document.createElement("div");

    let authorText = document.createElement("span");
    authorText.innerText = "Author:";
    bookAuthor.appendChild(authorText);
  
    NTEF.authors.map((person) => {
      let creator = document.createElement("a");
      console.log(person)
      creator.href = person.wiki;
      creator.classList = `tooltip-container bookAuthor ${person.name}`;
      creator.innerText = person.name;
      bookAuthor.appendChild(creator);
    });
  
    articleSection.appendChild(bookAuthor);

  
  
    /// Publisher
  
    const  bookPublisher = document.createElement("div");
  
    let publisherText = document.createElement("span");
    publisherText.innerText = "Publisher:";
    bookPublisher.appendChild(publisherText);
  
    NTEF.Publisher.map((company) => {
      let publisher = document.createElement("a");
      publisher.href = company.wiki;
      publisher.classList = `tooltip-container bookPublisher ${company.name}`;
      publisher.innerText = company.name;
      bookPublisher.appendChild(publisher);
    });

    articleSection.appendChild(bookPublisher);


  Booksection.appendChild(articleSection)
  body.insertBefore(Booksection, footer);
  // Create tooltips for author name and book cover
  const footerMenu = document.createElement("div");
  footerMenu.classList = "footerMenu";
  footerMenu.setAttribute("id", "footerMenu");
  footerMenu.appendChild(createSectionMenu());
  footerMenu.appendChild(createStyleMenu());
  body.appendChild(footerMenu)


  
  //EVENTS

  //tooltip events

  articleSection.addEventListener("mouseover", (e) => insertTooltip(e));
  articleSection.addEventListener("mouseout", (e) => deleteTooltip(e));

  // menu events
  headerMenu.addEventListener("change", (e) => SelectSection(e));
  headerMenu.addEventListener("change", (e) => ChangeStyle(e));

  footerMenu.addEventListener("change", (e) => SelectSection(e));
  footerMenu.addEventListener("change", (e) => ChangeStyle(e));
}
