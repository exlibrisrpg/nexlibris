import { notFound } from "next/navigation";

export default function Page({
  params: { systemSlug, pageSlug },
}: {
  params: { systemSlug: string; pageSlug: string };
}) {
  switch (pageSlug) {
    case "about": {
      return <About systemSlug={systemSlug} />;
    }
    case "credits": {
      return <Credits />;
    }
    default: {
      notFound();
    }
  }
}

function About({ systemSlug }: { systemSlug: string }) {
  switch (systemSlug) {
    case "cyborg": {
      return (
        <>
          <h1>About ELCB</h1>
          <p>
            EX LIBRIS CY_BORG is a directory of official, semi-official, and
            third-party content for the CY_BORG ttrpg. This resource is meant to
            raise creators&apos; visibility in the community and help players &
            GMs discover new content to use in their games.
          </p>
          <hr />
          <p>
            Unless otherwise noted, the third-party products presented here are
            independent productions by their respective authors/publishers and
            are not affiliated with Stockholm Kartell.
          </p>
          <p>CY_BORG is © 2022 Stockholm Kartell.</p>
        </>
      );
    }
    case "deathinspace": {
      return (
        <>
          <h1>About ELDIS</h1>
          <p>
            EX LIBRIS DEATH IN SPACE is a directory of official, semi-official,
            and third-party content for the DEATH IN SPACE RPG. This resource is
            meant to raise creators&apos; visibility in the community and help
            players & GMs discover new content to use in their games.
          </p>
          <p>
            If you know of missing content or have published something of your
            own, drop by the{" "}
            <a href="https://discord.gg/Psqc7p4x4p">DEATH IN SPACE discord</a>{" "}
            and post it in the <code>#stuff-for-death</code> channel.
          </p>
          <hr />
          <p>
            Unless otherwise noted, the third-party products presented here are
            independent productions by their respective authors/publishers and
            are not affiliated with Stockholm Kartell.
          </p>
          <p>DEATH IN SPACE is © Stockholm Kartell and/or other authors.</p>
        </>
      );
    }
    case "mothership": {
      return (
        <>
          <h1>About ELMS</h1>
          <p>
            EX LIBRIS MOTHERSHIP is a directory of official and third-party
            content for the MOTHERSHIP RPG. This resource is meant to raise
            creators&apos; visibility in the community and help players & GMs
            discover new content to use in their games.
          </p>
          <p>
            If you know of missing content or have published something of your
            own, drop by the{" "}
            <a href="https://discord.gg/mothership-461670627468771329">
              Mothership discord
            </a>{" "}
            and post in the <code>#3pp-module-discussion</code> channel.
          </p>
          <hr />
          <p>
            Unless otherwise noted, the third-party products presented here are
            independent productions by their respective authors/publishers and
            are not affiliated with Tuesday Knight Games.
          </p>
          <p>
            MOTHERSHIP® is a registered trademark of Tuesday Knight Games. All
            rights reserved. For additional information, visit
            www.tuesdayknightgames.com or contact
            contact@tuesdayknightgames.com.
          </p>
        </>
      );
    }
    default: {
      return (
        <>
          <h1>About ELMB</h1>
          <p>
            Ex Libris Mörk Borg is a directory of official, semi-official, and
            third-party content for the Mörk Borg RPG. This resource is meant to
            raise creators&apos; visibility in the community and help players &
            GMs discover new content to use in their games.
          </p>
          <p>
            For more information about ELMB, Mörk Borg and the third-party
            license, and additional resources for creators and players, please
            visit{" "}
            <a href="http://liberludorum.com/2020/09/28/ex-libris-mork-borg/">
              Liber Ludorum
            </a>
            .
          </p>
          <h2>About the Annotations</h2>
          <p>Annotations consist of comments in five categories:</p>
          <ul>
            <li>
              the core <strong>concept</strong> in the creator&apos;s own words
            </li>
            <li>
              the <strong>content</strong>&apos;s character and notable
              mechanics, tables, etc.
            </li>
            <li>
              the <strong>writing</strong>&apos;s character, composition, and/or
              accessibility
            </li>
            <li>
              the <strong>visual</strong> character of the graphic design and/or
              layout
            </li>
            <li>
              notes on <strong>usability</strong> as a game document and/or play
              component
            </li>
          </ul>
          <p>
            If you know of any missing content, please{" "}
            <a href="http://liberludorum.com/contact/">get in touch</a>. If
            you&apos;re a creator with questions or concerns, I invite you to do
            the same.
          </p>
          <p>
            Ex Libris Mörk Borg is supported by Liber Ludorum&apos;s{" "}
            <a href="http://liberludorum.com/critical-thanks/">
              generous patrons
            </a>
            . If you find this resource valuable (and would like updates
            delivered weekly to your inbox), please consider also{" "}
            <a href="http://liberludorum.com/support/">lending your support</a>.
          </p>
          <hr />
          <p>
            Unless otherwise noted, the third-party products presented here are
            independent productions by their respective authors/publishers and
            are not affiliated with Ockult Örtmästare Games or Stockholm
            Kartell. They are published under the MÖRK BORG Third Party License.
          </p>
          <p>
            MÖRK BORG is copyright Ockult Örtmästare Games and Stockholm
            Kartell.
          </p>
        </>
      );
    }
  }
}

function Credits() {
  return (
    <>
      <h1>Credits</h1>

      <h2>Questing Adventurer</h2>
      <ul>
        <li>Kevin B.</li>
      </ul>

      <h2>Dungeon Degenerate</h2>
      <ul>
        <li>Ryklan Rolfsson</li>
      </ul>

      <h2>LARPing Librarian</h2>
      <ul>
        <li>Bryan Barletta</li>
        <li>Davide Cavadini</li>
        <li>Derek Gustafson</li>
        <li>Johan Nohr</li>
        <li>John Bannister</li>
        <li>Macathu</li>
        <li>Mcglintlock</li>
        <li>newyear Studios</li>
        <li>Phillip Meagher</li>
        <li>Rascovich</li>
        <li>rom rom</li>
        <li>Seedling Games</li>
        <li>Stein Hansen</li>
      </ul>

      <h2>Benevolent Scribe</h2>
      <ul>
        <li>Afterthought Committee</li>
        <li>Bijan F. Zavareei</li>
        <li>Bookkeeper</li>
        <li>Derrick Long</li>
        <li>DW Dagon</li>
        <li>Greyson Yandt</li>
        <li>Limithron</li>
        <li>Long Tail Games</li>
        <li>Michael Done (RaptorShadow)</li>
        <li>momatoes</li>
        <li>Philip J Reed</li>
        <li>Ryan D Wymer</li>
      </ul>

      <h2>Crazed Cvltist</h2>
      <ul>
        <li>&lt;Sneaky Beeping&gt;</li>
        <li>Adam Howe</li>
        <li>Adi Rice</li>
        <li>Alan Davis</li>
        <li>Alastair Binner</li>
        <li>Alex Thornton-Clark</li>
        <li>Andrew Lanier</li>
        <li>AragornZDark</li>
        <li>Billy Hamilton</li>
        <li>Bobby Lee</li>
        <li>Bracken MacLeod</li>
        <li>Brian Colin</li>
        <li>Brian Foster</li>
        <li>Bryan &ldquo;Cybershaman(X)&rdquo; Logie</li>
        <li>Charlie shaw</li>
        <li>Chris Hladik</li>
        <li>Chris Scown</li>
        <li>Christian Sykes</li>
        <li>Christopher Boone</li>
        <li>Christopher Lockey</li>
        <li>Connor C.</li>
        <li>Conor Tanji</li>
        <li>Damon Wilson</li>
        <li>David Muñoz</li>
        <li>Dirk Schlobinski</li>
        <li>Erik Hammerstrom</li>
        <li>Fitz&apos;Khin</li>
        <li>Frank Reding</li>
        <li>Gabriel Herrin</li>
        <li>Gavriel Quiroga</li>
        <li>Gerard O&apos;Brien</li>
        <li>Getaro</li>
        <li>Grahame &lsquo;TheInstaGrahame&rsquo; Turner</li>
        <li>Ian Long</li>
        <li>Isaac Wilcox</li>
        <li>Isaac Williams</li>
        <li>Jacob Thompson</li>
        <li>Jason Fuhrman</li>
        <li>Jaume Ferrer Molinero</li>
        <li>Jeff Szusz</li>
        <li>Jerrod Stead</li>
        <li>jerrymuerte aka neanderthal</li>
        <li>John Baltisberger</li>
        <li>John Power Jr.</li>
        <li>Jonathan Hudon</li>
        <li>Jordan Carter</li>
        <li>Ken Lowery</li>
        <li>Kostas Pappas</li>
        <li>Lawson Johnson</li>
        <li>Luke Shaw</li>
        <li>Mark J. Featherston</li>
        <li>MarksQuests</li>
        <li>Markus Malmo Lange</li>
        <li>Marshall Lemon</li>
        <li>Martin Bonnevier Kronlid</li>
        <li>Martyn Allan</li>
        <li>Matt McCleland</li>
        <li>Matthew French</li>
        <li>Matthew Morris (ManaRampMatt)</li>
        <li>Matthew Screng Paluch</li>
        <li>Matthew Ward</li>
        <li>Michael Nagenborg</li>
        <li>Miguel A. Salgado</li>
        <li>Nacho Disk</li>
        <li>Namtabandy</li>
        <li>Nerd Sirens</li>
        <li>Nicholas King</li>
        <li>Owen McGauley</li>
        <li>Pablo Dapena</li>
        <li>Pablo Ruiz Valls</li>
        <li>Patrick P.</li>
        <li>Patrick Smith</li>
        <li>Philipp Teich</li>
        <li>Roland Boshnack</li>
        <li>Roll Damage</li>
        <li>Ronny Anderssen @ Ra Press</li>
        <li>Rugose Kohn</li>
        <li>Ryan Percy</li>
        <li>Ryan Russell</li>
        <li>SaintVitus1</li>
        <li>Samual King</li>
        <li>{"Sasha De'ath - {The Eldritch Tomb}"}</li>
        <li>Sebrina Calkins</li>
        <li>Shawn P</li>
        <li>Slaytanical</li>
        <li>St. Moha</li>
        <li>Steve Burnett</li>
        <li>Steve Runyan</li>
        <li>T. Houghton</li>
        <li>The Mad Wizard</li>
        <li>Thomas Geno-Stumme</li>
        <li>Thomas van Grol</li>
        <li>Tim “Danger” Hall</li>
        <li>Tully</li>
        <li>Tyler Lindsey</li>
        <li>XR</li>
        <li>Zach Schultz</li>
        <li>Zach Yokell</li>
        <li>Zbigniew Zelga</li>
      </ul>

      <h2>Fabled Dungeoneer</h2>
      <ul>
        <li>abracad_acab</li>
        <li>Alain Sarti</li>
        <li>Alex L</li>
        <li>Alyx</li>
        <li>Anders Russell</li>
        <li>Andy Brown</li>
        <li>Andy Gardner</li>
        <li>Anthony Koutroulis</li>
        <li>Arch DeLux</li>
        <li>B Halliday</li>
        <li>Ben O&apos;Connor</li>
        <li>Brian Dysart</li>
        <li>BW Swartz</li>
        <li>Cagax the Colorblind Occultist</li>
        <li>Calen Heydt</li>
        <li>Chalkdown</li>
        <li>Charley/Mord4k</li>
        <li>Charlie Vick</li>
        <li>Chris Sylvis</li>
        <li>Christian Eichhorn</li>
        <li>Dave Eden</li>
        <li>David Harvison</li>
        <li>djflippy</li>
        <li>Douglas McAndrew</li>
        <li>Emiel Boven</li>
        <li>Eric Rumfelt</li>
        <li>Eryk Sawicki</li>
        <li>Forstmester Meidell</li>
        <li>Frankie Swa</li>
        <li>Heckin&apos; Viv</li>
        <li>Henry Wentworth Akeley</li>
        <li>Hrvoje Ruhek</li>
        <li>Huffa Frobes-Cross</li>
        <li>ian Lovecraft</li>
        <li>Iko</li>
        <li>J.P. MacDonald</li>
        <li>Jesse Alexander</li>
        <li>Joey &ldquo;Bemused_GM&rdquo; Neuendorff</li>
        <li>John Casey</li>
        <li>John Hall (Rollers of R&apos;lyeh Podcast)</li>
        <li>Jonathan Swadley</li>
        <li>Joshua K.</li>
        <li>Kevin LaForest</li>
        <li>Krieg Knight</li>
        <li>Lars Nilsson</li>
        <li>Luigi Pizzinu</li>
        <li>Lukas Feinweber</li>
        <li>LupusAmicus</li>
        <li>machinic</li>
        <li>Marcia B.</li>
        <li>Matt Kay</li>
        <li>Max Glasner</li>
        <li>Max Lander</li>
        <li>Max Moon</li>
        <li>Michael G. Potter</li>
        <li>Michael Stensen Sollien</li>
        <li>Morgan Hay</li>
        <li>Neil de Carteret</li>
        <li>Nell Azathoth Tull</li>
        <li>Nicholas Schlensker</li>
        <li>Nick Castillo</li>
        <li>Nikolas Wolff</li>
        <li>Patrick Farrell</li>
        <li>Peter Stadtmueller</li>
        <li>PS Berge</li>
        <li>seb pines</li>
        <li>Shankira</li>
        <li>SkeletonKey Games</li>
        <li>The Sherwood Family</li>
        <li>Thyme</li>
        <li>Tim Jacobs</li>
        <li>Tseb</li>
        <li>Victor Pardinho</li>
        <li>vil</li>
        <li>Wes Fournier</li>
        <li>Your Mother</li>
      </ul>

      <p>
        And last but certainly not least, a person I admire immensely. Love,
        even. Karl Druid.
      </p>
    </>
  );
}
