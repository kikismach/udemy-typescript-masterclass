// method -> object
// function -> window, global

const book = {
  title: "The Title",
  read() {
    console.log(this);
  },
};

book.stopreading = function () {
  console.log(this);
};

book.stopreading();

function watchmovie() {
  console.log(this);
}

watchmovie();
