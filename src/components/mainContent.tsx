import "./mainContent.css";

function MainContent() {
  return (
    <div className="VejledningTekstIndhold">
      <h2>Åben undervisningsmateriale sitet</h2>
      <div className="TextAndButtons">
        <p>
          Undervisningsmaterialesitet er en samling af webinarer og andre
          undervisningsaktiviteter på de lovområder, Jura administrerer. Sitet
          er opdelt efter de forskellige kontorer der afholder
          webinarer/undervisningsaktiviteter i et drop-down menu format. <br></br>Når man
          klikker på en drop-down for det enkelte kontor, ses den nyeste
          aktivitet samt dets materiale. Klikker på man på den blå knap i bunden
          af hver drop-down, bliver man ført til en side, der viser en oversigt
          over alt undervisningsmateriale for det gældende kontor. <br></br>Det er
          vigtigt, når du uploader et nyt webinar, at du både opdaterer
          webinaret i drop-down menuen, og på selve sitet for det enkelte
          kontor. Vi vil starte med at vise hvordan du uploader webinaret i
          drop-downen efterfulgt af hvordan du uploader det, inde på kotnorets
          egen side.
        </p>
        <div className="ButtonArea">
          <button id="PreviousBut"> Forrige </button>
          <p id="CurrentPage"> 1/18 </p>
          <button id="NextBut"> Næste </button>
        </div>
      </div>
      <div className="VideoContent">
        <video autoPlay width="550" height="300" controls>
          <source
            src="videoSong.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default MainContent;
