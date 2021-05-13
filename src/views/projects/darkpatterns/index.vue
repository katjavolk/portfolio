<template>
  <b-container>
    <titel>
      <template #title>Dark Patterns</template>
      <template #subtitle>Manipulatives Design</template>
    </titel>
    <paragraph
      >Die Gestaltung eines Interfaces soll uns die Bedienung der Webseite oder
      der App so leicht wie möglich machen. Nicht immer ist gelingt dies und
      schlecht gestaltete Interfaces sorgen schnell für Frust. Doch schlechtes
      Design ist nicht in allen Fällen schuld daran. Die Gestaltung kann bewusst
      so umgesetzt werden, dass sie unsere Gewohnheiten und unser Verhalten
      ausnutzt. Diese Gestaltungstechniken werden Dark Patterns genannt. Mit
      manipulativen Taktiken wird unsere Interaktion beeinflusst, so dass wir
      Aktionen ausführen oder Einstellungen erlauben, die gar nicht in unserem
      Interesse sind. Dabei bleibt die Manipulation meist unbemerkt.
    </paragraph>
    <paragraph
      >In diesem Projekt werden Dark Patterns als Charaktere dargestellt. Die
      Manipulationstechniken werden in Eigenschaften übersetzt. Mit
      Augmented Reality kann der Betrachter die Figuren in kurzen Szenen
      kennenlernen. Die Charaktere sollen die Dark Patterns leicht verständlich
      und humoristisch vermitteln, so dass sie im Gedächtnis
      bleiben und so dabei helfen, Dark Patterns erkennen und sich vor
      Manipulation schützen zu können.
    </paragraph>

    <b-row no-gutters style="margin-top: 1vh; margin-bottom: 10vh">
      <b-col sm="12" md="6" lg="6" style="padding-right: 0.5rem">
        <img
          :src="link('ar_1')"
          width="100%"
        />
      </b-col>
      <b-col sm="12" md="6" lg="6" style="padding-left: 0.5rem">
        <!-- :src="link('hier_katze_einfügen')" -->
        <img
          :src="link('ar_2')"
          width="100%"
        />
      </b-col>
    </b-row>

    <div style="margin: 60px 0 0 0" class="d-none d-sm-block">
      <!-- Cornelius -->
      <div
        v-for="content in contents"
        :key="content.pattern"
        style="margin-bottom: 10vh"
      >
        <titel>
          <template #subtitle>{{ content.subtitle }} </template>
        </titel>
        <div class="gallery_darkpatterns">
          <figure class="figur">
            <img
              :src="link('figur_' + content.id)"
              class="gallery_img_darkpatterns"
            />
          </figure>
          <figure class="detail-top">
            <img
              :src="link('detail-top_' + content.id)"
              class="gallery_img_darkpatterns"
            />
          </figure>
          <figure class="detail-bottom">
            <img
              :src="link('detail-bottom_' + content.id)"
              class="gallery_img_darkpatterns"
            />
          </figure>
          <figure class="text">
            <h3 style="margin: 0 0 0 0">{{ content.pattern }}</h3>
            <p v-html="content.paragraph"></p>
          </figure>
        </div>
        <div>
          <kVideo style="margin-top: 1rem" :video="content.video" />
        </div>

        <div><!-- Hier divider strich einbauen --></div>
      </div>
      <!-- /Cornelius Ende -->

      <div class="d-block d-sm-none"></div>
      <b-row>
        <b-col
          v-for="i in 0"
          :key="'picture-mobile-' + i"
          sm="12"
          style="margin-top: 1vh"
        >
          <img :src="link(i)" width="100%" />
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<style scoped>
.gallery_darkpatterns {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-gap: 1rem;
}

.gallery_img_darkpatterns {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.figur {
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 13;
  margin-bottom: 0px;
}

.detail-top {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 7;
  margin-bottom: 0px;
}

.detail-bottom {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 7;
  grid-row-end: 13;
  margin-bottom: 0px;
}

.text {
  grid-column-start: 9;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 13;
}
</style>

<script>
import titel from "@/components/project/titel.vue";
import paragraph from "@/components/project/paragraph.vue";
import kVideo from "@/components/project/video.vue";

export default {
  name: "darkpatterns",
  components: {
    titel,
    paragraph,
    kVideo,
  },

  data() {
    return {
      contents: [
        {
          id: "confirmshaming",
          subtitle: "Cornelius Firmshaming",
          paragraph:
            "Dieses Dark Pattern versucht den Nutzer zu einer bestimmten Auswahl zu bewegen. \
              Die Option zum Ablehnen ist so formuliert, dass er durch Scham zur Zustimmung gezwungen wird. \
              Im Nutzer wird dadurch Zweifel an seiner Entscheidung ausgelöst und er wird für \
              das Ablehnen der Option herabgewürdigt. Diese überheblichen \
              Eigenschaften wurden zu Cornelius Firmshaming. \
              Einen Pseudointellektuellen, der viel auf sich und seine Expertise \
              hält. Menschen, die kein Interesse an seiner Expertise haben, \
              behandelt er herablassend, da sie offensichtlich zu dumm sind, \
              sein Genie zu erkennen.",

          pattern: "Confirmshaming",
          video: 507627476,
        },
        {
          id: "roachmotel",
          subtitle: "Roachy Motel",
          paragraph:
            "Roach Motel beschreibt eine Situation, in die man leicht hinein kommt, jedoch nur schwer wieder heraus. \
            Die Vorgänge auf einer Webseite sind dabei so gestaltet, dass es z.B. nur wenige Klicks benötigt sich einen Account zu erstellen, \
            möchte man ihn jedoch zu einem späteren Zeitpunkt wieder löschen, stellt sich dies als Odyssee durch Menüs und Einstellungen heraus. \
            Die Suche nach dem richtigen Button ist meist auch noch vergebens, da sich der Account nicht einfach auf der Webseite löschen lässt. \
            Stattdessen muss eine offizielle E-Mail an den Support gesendet oder sogar ein Telefongespräch geführt werden. \
            Diese unnötige Verkomplizierung wirkt sehr bürokratisch. \
            Roachy Motel stellt eine strenge Bürokratin, die stets schlecht gelaunt ist, \
            sich immer gestört fühlt und keine Zeit hat dumme Fragen zu beantworten dar. Sie macht ihren Job gnadenlos nach Vorschrift und drückt dabei nie ein Auge zu, selbst wenn nur das Datum auf dem Antrag fehlt.",

          pattern: "Roch Motel",
          video: 507630653,
        },
        {
          id: "forcedaction",
          subtitle: "Ford A.C.",
          paragraph:
            "Dieses Dark Pattern zwingt den Nutzer dazu eine bestimmte Aktion auszuführen, um eine Funktion nutzen oder überhaupt darauf zugreifen zu können. \
            In einigen Fällen ist die Aktion erforderlich, um einen Vorgang abzuschließen, in anderen ist sie zwar optional, der Nutzer würde davon aber sehr profitieren. \
            So klein die geforderte Aktion auch sein mag, der Nutzer ist immer der Verlierer. Denn nur er kann den Kompromiss eingehen und sich gegen seine eigentliche Intention zu handeln.\
            Die andere Seite ist bleibt ein unerbittliches Hindernis. Ford A.C. ist ein knallharter Türsteher. An ihm kommt niemand vorbei, wenn er es nicht will. \
            Er ist kompromisslos und definitiv ein Typ mit dem man sich nicht anlegen will. Es bleibt nur seinen Anweisungen Folge zu leisten oder sich zu verziehen, denn erweichen lässt er sich mit Sicherheit nicht.",

          pattern: "Forced Action",
          video: 507629012,
        },
        {
          id: "nagging",
          subtitle: "Naggi",
          paragraph:
            "Man spricht von Nagging, wenn eine Webseite oder App immer wieder, die Aufmerksamkeit des Nutzers unterbricht, um unter anderem zur Aktivierung bestimmter Funktionen aufzufordern. \
            Meist sind die Auswahlmöglichkeiten so gestaltet, dass der Nutzer nicht endgültig ablehnen kann und so die Nachfrage bei Verweigerung immer wiederholt werden kann.  \
            Wie ein Kind denken, welches kein “Nein” akzeptiert und mit seiner stetigen Quengelei versucht sich die Erlaubnis zu ertrotzen. \
            Naggi ist ein Junge mit unglaublicher Ausdauer, wenn er etwas haben will. Er weicht nicht davon ab, immer und immer wieder dieselbe Frage zu stellen, bis er die Nerven seines Gegenübers zermürbt hat und schlussendlich bekommt, was er möchte.",

          pattern: "Nagging",
          video: 507630210,
        },
        {
          id: "disguisedad",
          subtitle: "Dad",
          paragraph:
            "In diesem Fall wird Werbung so gestaltet, dass sie für den Nutzer wie ein Teil des Interfaces wirkt, damit dieser darauf klickt. \
            In manchen Fällen bemerkt der Nutzer nicht einmal, dass er auf einer gesponserten Seite gelandet ist. In anderen Fällen wird die Werbung anschließend offensichtlich, \
            es fällt dem Nutzer allerdings schwer, nachzuvollziehen wie er dort gelandet ist. \
            Diesen fließenden Wechsel zwischen selbstbestimmtem Browsen auf einer Seite und hineingeraten in eine Werbung stellt der Charakter Dad dar. \
            Ein netter, sympathischer Vater an einem Sonntagmorgen, der in Jogginghose und schlabbrigen T-Shirt völlig harmlos erscheint. \
            Dad ist offen und zuvorkommen, ein Mensch mit dem man sich gerne unterhält. Doch je länger man mit ihm spricht desto mehr beschleicht einen das Gefühl, sich in einer Dauerwerbesendung zu befinden.",

          pattern: "Disguised Ad",
          video: 507628511,
        },
        {
          id: "misdirection",
          subtitle: "Miss Direction",
          paragraph:
            "Bei dem Dark Pattern lenkt die Gestaltung absichtlich die Aufmerksamkeit auf eine Sache, um den Nutzer von einer anderen abzulenken. \
            Dadurch soll der Nutzer bestimmte Optionen oder Funktionen übersehen, die eigentlich in seinem Interesse sind. \
            Im Sinne dieser diese grellen, ablenkenden Eigenschaften entstand Miss Direction. Eine Frau mit schrillem Stil und einer raumeinnehmenden Persönlichkeit. \
            Sie steht gerne im Mittelpunkt und schwärmt ununterbrochen über ihren fabelhaften Modegeschmack. \
            Dass sie dabei anderen ins Wort fällt und nur über sich spricht, bemerkt sie selbst nicht.",

          pattern: "Misdirection",
          video: 507629554,
        },
      ],
    };
  },
  methods: {
    link(image) {
      return require("@/assets/img/darkpatterns_" + image + ".jpg");
    },
  },
};
</script>