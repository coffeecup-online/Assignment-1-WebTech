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
        titles
    ) {
        super(name,wiki);
        this.tiles = titles;
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
    wiki
  ) {
    super(name,birthyear);
    this.titles = titles;
    this.wiki = wiki;
  }
}


const SW = new Publisher(
    "Secker & Warburg",
    "https://en.wikipedia.org/wiki/Harvill_Secker",
    ["1984"]
)

const NTEF = new Book(
    ["George Orwell"],
    1954,
    "1984",
    "thriller",
    SW.name,
    "./assets/pictures/book1.jpg",
    "hier moet alle tekst komen over dit boek"
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

  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const action = document.getElementById("action");

window.onload = () => {
    const body = document.querySelector("body");
      //header sub menu / styles
  const headerMenu = document.createElement("div");
  headerMenu.classList = "headerMenu";

  headerMenu.appendChild(createSectionMenu());
  headerMenu.appendChild(createStyleMenu());


  
    // Append logo div, navigation nav, and action div to header
    header.insertBefore(headerMenu, action);

    console.log(header.childNodes)
    

    const articleSection = document.createElement("article");
    body.insertBefore(articleSection, footer);
  
    //Insert Book Info to Article
  
    /// title, author, genre
  
    const bookHeader = document.createElement("h2");
    bookHeader.innerText = NTEF.bookTitle;
    articleSection.appendChild(bookHeader);
  
    const bookAuthor = document.createElement("span");
    bookAuthor.classList = "authors";
    bookAuthor.innerText = NTEF.authors;
    articleSection.appendChild(bookAuthor);

    const bookYear = document.createElement("p");
    bookYear.classList = "year";
    bookYear.innerText = NTEF.year;
    articleSection.appendChild(bookYear);
    

    const bookGenre = document.createElement("p");
    bookGenre.classList = "genre";
    bookYear.innerText = NTEF.genre;
    articleSection.appendChild(bookGenre);

    const bookPublisher = document.createElement("p");
    bookPublisher.classList = "publisher";
    bookPublisher.innerText = NTEF.Publisher;
    articleSection.appendChild(bookPublisher);

    const bookCover = document.createElement("img");
    bookCover.setAttribute("src", NTEF.cover);
    bookCover.classList = "cover";
    articleSection.appendChild(bookCover);

    const bookPlot = document.createElement("p");
    bookPlot.classList = "plot";
    bookPlot.innerText = NTEF.plot;
    articleSection.appendChild(bookPlot);
  

    const footerMenu = document.createElement("div");
    footerMenu.classList = "footerMenu";
  
    footerMenu.appendChild(createSectionMenu());
    footerMenu.appendChild(createStyleMenu());
  
  
    
      // Append logo div, navigation nav, and action div to footer
      footer.appendChild(footerMenu);
  
}

// menu events

header.addEventListener("change", (e) => SelectSection(e));
header.addEventListener("change", (e) => ChangeStyle(e));

footer.addEventListener("change", (e) => SelectSection(e));
footer.addEventListener("change", (e) => ChangeStyle(e));