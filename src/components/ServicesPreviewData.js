import mainservice1 from '././../assets/mainservice1.jpg';
import mainservice2 from '././../assets/mainservice2.jpg';
import mainservice3 from '././../assets/mainservice3.jpg';
import otherservice1 from '././../assets/otherservice1.jpg';
import otherservice2 from '././../assets/otherservice2.jpg';
import otherservice3 from '././../assets/otherservice3.jpg';
import otherservice4 from '././../assets/otherservice4.jpg';
import otherservice5 from '././../assets/otherservice5.jpg';
import otherservice6 from '././../assets/otherservice6.jpg';


const BasicServices = [
    {
        id: 1,
        title: 'Projektowanie ogrodów',
        path: '/gardening-services/projecting-gardens',
        desc: 'Projektowanie ogrodów i terenów zielonych łącznie z całą infrastrukturą dodatkową jak ogrodzenia, tarasy, murki, ścieżki, altany ogrodowe, place zabaw, miejsca do grillowania, oczka wodne oraz inne elementy architektury ogrodowej ',
        imgUrl: mainservice1
    },

    {
        id: 2,
        title: 'Zakładanie ogrodów',
        path: '/gardening-services/creating-gardens',
        desc: 'Oferujemy kompleksowe zakładanie ogrodów oraz wszelkich terenów zieleni poczynając od prac ziemnych i instalacyjnych, takich jak nawadnianie ogrodów, odwodnienia, oświetlenie ogrodu aż po budowę zbiorników wodnych  ',
        imgUrl: mainservice2
    },
    {
        id: 3,
        title: 'Pielegnacja ogrodów',
        path: '/gardening-services/gardening',
        desc: 'Po zakończeniu pracy nad budową ogrodu nie należy zapominać o tym, że ogórd wymaga doglądania i pielęgnacji. Pozostawiony sam sobie ogród, w rezultacie dość szybko straci swoje walory i stanie się mało przyjaznym miejscem ',
        imgUrl: mainservice3
    },
]

const OtherServices = [
    {
        id: 1,
        title: 'Nawadnianie ogrodu',
        path: '/gardening-services/irrigation',
        desc: 'Nowoczesne systemy nawadniania ogrodów ',
        imgUrl: otherservice1
    },
    {
        id: 2,
        title: 'Oświetlenie ogrodu',
        path: '/gardening-services/lights',
        desc: 'Kompleksowe oświetlenie ogrodu i elementów architektury ',
        imgUrl: otherservice2
    },
    {
        id: 3,
        title: 'Odwodnienia i drenaze',
        path: '/gardening-services/dihydrating',
        desc: 'Odwodnienia i drenaże terenów zagrożonych nadmiarem wody ',
        imgUrl: otherservice3
    },
    {
        id: 4,
        title: 'Nawierzchnie utwardzone',
        path: '/gardening-services/ground-cover',
        desc: 'Nawierzchnie brukowe, krurszywa, kratki trawnikowej i inne ',
        imgUrl: otherservice4,
    },
    {
        id: 5,
        title: 'Sprzęt wielozadaniowy',
        path: '/gardening-services/multi-tool',
        desc: 'Wynajem sprzętu wielozadaniowego do zadań specjalnych ',
        imgUrl: otherservice5
    },
    {
        id: 6,
        title: 'Drewno kominkowe ',
        path: '/gardening-services/wood',
        desc: 'Sprzedaż drewna kominkowego ',
        imgUrl: otherservice6
    },
]

export { BasicServices, OtherServices }