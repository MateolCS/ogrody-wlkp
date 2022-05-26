import Header from "./Header"
import Menu from "./Menu"
import Location from "./Location"
import InfoNav from "./InfoNav"
import Footer from "./Footer"
import React from "react"

import { LocationLink, LocationP, GreaterThan } from "./styles/Location.styled"
import { Container, StyledSection, ParagraphTitle, TextListOrd, TextListAlf, PrivacyLink, TextList, TextContent, } from "./styles/Utils.styled"

const Privacy = () => {
  return (
    <>
        <Header />
        <Menu  pageTitle={'Polityka prywatności'}/>
        <Location>
            <LocationLink to={'/'}>Strona główna <GreaterThan/></LocationLink>
            <LocationP>Polityka prywatności</LocationP>
        </Location>
        <StyledSection>
            <Container direction={'column'}>
                <ParagraphTitle>Polityka prywatności i bezpieczeństwa</ParagraphTitle>
                <TextListOrd paddingBot={'.7rem'}>
                    <li>
                    Informacje ogólne
                        <TextListOrd>
                            <li>
                            Administratorem danych jest firma ZHPU Panda Teresa Kujawa z siedzibą w Budzyniu (ul. Rynkowa 41, 64-840 Budzyń) wpisana do Centralnej Ewidencji Działalności Gospodarczej pod numerem NIP: 766-106-65-77
                            </li>
                            <li>
                            Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:
                            <TextListAlf>
                                <li>
                                    Poprzez dobrowolnie wprowadzone w formularzach informacje.
                                </li>
                                <li>
                                    Poprzez zapisywanie w urządzeniach końcowych pliki cookie (tzw. "ciasteczka").
                                </li>
                                <li>
                                    Poprzez zapisywanie technicznych logów na poziomie serwera www, obsługiwanego przez operatora hostingu.
                                </li>
                            </TextListAlf>
                            </li>
                        </TextListOrd>
                    </li>
                    <li>
                        Informacje w formularzach
                        <TextListOrd>
                            <li>
                                Zbieramy wyłącznie informacje podane dobrowolnie przez użytkownika.
                            </li>
                            <li>
                                Nasz serwis może zapisać ponadto informacje o parametrach połączenia (oznaczenie czasu, adres IP)
                            </li>
                            <li>
                                Dane w formularzu nie są udostępniane podmiotom trzecim inaczej, niż za zgodą użytkownika.
                            </li>
                            <li>
                                Dane podane w formularzu mogą stanowić zbiór potencjalnych klientów, zarejestrowany przez Operatora Serwisu w rejestrze prowadzonym przez Generalnego Inspektora Ochrony Danych Osobowych.
                            </li>
                            <li>
                                Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego lub zapisu na newsletter. Znajduje to zastosowanie do wszystkich formularzy, które znajdują się lub w przyszłości znajdą się w serwisie.
                            </li>
                            <li>
                                Twoje dane osobowe przekazane nam w formularzu zapisu na newsletter są przez nas przetwarzane wyłącznie w celu przesyłania przez nas informacji o tematyce motywacyjnej, rozwoju osobistego, nowościach w serwisie oraz informacji handlowych. Podstawą przetwarzania Twoich danych podanych w formularzu zapisu na newsletter jest wyrażona przez Ciebie zgoda. Będziemy przetwarzać te dane do czasu cofnięcia przez Ciebie zgody.
                            </li>
                            <li>
                                Dane podane w formularzach mogą być przekazane podmiotom technicznie realizującym niektóre usługi – w szczególności dotyczy to przekazywania informacji o posiadaczu rejestrowanej domeny do podmiotów będących operatorami domen internetowych (przede wszystkim Naukowa i Akademicka Sieć Komputerowa j.b.r – NASK), serwisów obsługujących płatności lub też innych podmiotów, z którymi w tym zakresie współpracujemy.
                            </li>
                        </TextListOrd>
                    </li>
                    <li>
                        Informacja o plikach cookies i tworzeniu profilu użytkownika
                        <TextListOrd>
                            <li>
                                W serwisie korzystamy z plików cookies.
                            </li>
                            <li>
                                Pliki cookies (tzw. "ciasteczka") stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.
                            </li>
                            <li>
                                Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest ZHPU Panda Teresa Kujawa z siedzibą w Budzyniu.
                            </li>
                            <li>
                                Pliki cookies wykorzystywane są w następujących celach:
                                <TextListAlf>
                                    <li>
                                        tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury i zawartości;
                                    </li>
                                    <li>
                                        utrzymanie sesji Użytkownika Serwisu (po zalogowaniu), dzięki której Użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;
                                    </li>
                                    <li>
                                        określania profilu użytkownika w celu wyświetlania mu dopasowanych materiałów w sieciach reklamowych, w szczególności sieci Google.
                                    </li>
                                </TextListAlf>
                            </li>
                            <li>
                                W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: "sesyjne" (session cookies) oraz "stałe" (persistent cookies). Cookies "sesyjne" są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.
                            </li>
                            <li>
                                Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Możesz dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej.
                            </li>
                            <li>
                                Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.
                            </li>
                            <li>
                                Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu i wykorzystywane mogą być również przez współpracujących z operatorem Serwisu reklamodawców oraz partnerów.
                            </li>
                            <li>
                                Zalecamy przeczytanie polityki ochrony prywatności tych firm, aby poznać zasady korzystania z plików cookie wykorzystywane w statystykach: Polityka ochrony prywatności Google Analytics
                            </li>
                            <li>
                                Pliki cookie mogą być wykorzystane przez sieci reklamowe, w szczególności sieć Google, do wyświetlenia reklam dopasowanych do sposobu, w jaki użytkownik korzysta z Serwisu. W tym celu mogą zachować informację o ścieżce nawigacji użytkownika lub czasie pozostawania na danej stronie.
                            </li>
                            <li>
                                W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia: https://www.google.com/ads/preferences/
                            </li>
                            <li>
                                W celu zablokowania wykorzystywania swoich danych w Google Analytics możesz zainstalować dodatek blokujący Google Analytics w swojej przeglądarce, dostępny tu: https://tools.google.com/dlpage/gaoptout/?hl=pl
                            </li>
                        </TextListOrd>
                    </li>
                    <li>
                        Logi serwera
                        <TextListOrd>
                            <li>
                                Informacje o niektórych zachowaniach użytkowników podlegają logowaniu w warstwie serwerowej. Dane te są wykorzystywane wyłącznie w celu administrowania serwisem oraz w celu zapewnienia jak najbardziej sprawnej obsługi świadczonych usług hostingowych.
                            </li>
                            <li>
                                Przeglądane zasoby identyfikowane są poprzez adresy URL. Ponadto zapisowi mogą podlegać:
                                <TextListAlf>
                                    <li>
                                        czas nadejścia zapytania,
                                    </li>
                                    <li>
                                        czas wysłania odpowiedzi,
                                    </li>
                                    <li>
                                        nazwę stacji klienta – identyfikacja realizowana przez protokół HTTP,
                                    </li>
                                    <li>
                                        informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP,
                                    </li>
                                    <li>
                                        adres URL strony poprzednio odwiedzanej przez użytkownika (referer link) – w przypadku gdy przejście do Serwisu nastąpiło przez odnośnik,
                                    </li>
                                    <li>
                                        informacje o przeglądarce użytkownika,
                                    </li>
                                    <li>
                                        Informacje o adresie IP.
                                    </li>
                                </TextListAlf>
                            </li>
                            <li>
                                Dane powyższe nie są kojarzone z konkretnymi osobami przeglądającymi strony.
                            </li>
                            <li>
                                Dane powyższe są wykorzystywane jedynie dla celów administrowania serwerem.
                            </li>
                        </TextListOrd>
                    </li>
                    <li>
                        Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?
                        <TextListOrd>
                            <li>
                                Jeśli nie chcesz otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www
                            </li>
                            <li>
                                W celu zarządzania ustawieniami cookies wybierz z listy poniżej przeglądarkę internetową/ system i postępuj zgodnie z instrukcjami:
                                <TextList>
                                    <li><PrivacyLink href={'https://support.microsoft.com/pl-pl/windows/usuwanie-plik%C3%B3w-cookie-i-zarz%C4%85dzanie-nimi-168dab11-0753-043d-7c16-ede5947fc64d'}>Internet Explorer</PrivacyLink></li>
                                    <li><PrivacyLink href={'https://support.google.com/chrome/answer/95647?hl=pl'}>Chrome</PrivacyLink></li>
                                    <li><PrivacyLink href={'https://support.apple.com/pl-pl/guide/safari/sfri11471/mac'}>Safari</PrivacyLink></li>
                                    <li><PrivacyLink href={'https://support.mozilla.org/pl/kb/wzmocniona-ochrona-przed-sledzeniem-firefox-desktop?redirectslug=W%C5%82%C4%85czanie+i+wy%C5%82%C4%85czanie+obs%C5%82ugi+ciasteczek&redirectlocale=pl'}>Frefox</PrivacyLink></li>
                                    <li><PrivacyLink href={'https://help.opera.com/pl/latest/web-preferences/#cookies'}>Opera</PrivacyLink></li>
                                    <li><PrivacyLink href={'https://support.google.com/chrome/answer/95647?hl=pl'}>Android</PrivacyLink></li>
                                    <li><PrivacyLink href={'https://support.apple.com/pl-pl/HT201265'}>Safari (IOS)</PrivacyLink></li>
                                    <li><PrivacyLink href={'https://support.microsoft.com/pl-pl/windows/windows-phone-7-3ebc303c-59c0-d367-3995-f258b184fabb'}>WindowsPhone</PrivacyLink></li>
                                    <li><PrivacyLink href={'https://docs.blackberry.com/en/smartphone_users/deliverables/32004/Turn_off_cookies_in_the_browser_60_1072866_11.jsp'}>Blacberry</PrivacyLink></li>
                                </TextList>
                            </li>
                        </TextListOrd>
                    </li>
                    <li>
                        Udostępnianie danych
                        <TextListOrd>
                            <li>
                                Dane podlegają udostępnieniu podmiotom zewnętrznym wyłącznie w granicach prawnie dozwolonych, dodatkowo jeśli przepisy prawa wymagają od nas przetwarzania Twoich danych dla celów podatkowych i rachunkowych.
                            </li>
                            <li>
                                Jako administrator danych możemy mieć obowiązek udzielania informacji zebranych przez Serwis upoważnionym organom na podstawie zgodnych z prawem żądań w zakresie wynikającym z żądania.
                            </li>
                            <li>
                                Dane przekazywane przez użytkowników Operator ma prawo ponadto przekazywać tylko tym odbiorcom, którzy będą posiadać stosowne upoważnienia w związku ze świadczeniem na rzecz Operatora usług niezbędnych do utrzymywania strony internetowej oraz świadczenia oferowanych na niej usług.
                            </li>
                            <li>
                                Jako administrator wymagamy od Ciebie danych aby móc zawrzeć i wykonać zawartą z Tobą umowę, szczególnie tych niezbędnych np. ze względów rachunkowych lub podatkowych. W pozostałym zakresie podanie Twoich danych jest dobrowolne.
                            </li>
                            <li>
                                Operator nie będzie przekazywał danych osobowych użytkowników do państw trzecich ani organizacji międzynarodowych.
                            </li>
                        </TextListOrd>
                    </li>
                    <li>
                        Przechowywanie twoich danych osobowych
                        <TextListOrd>
                            <li>
                                Administrator przechowuje Twoje dane osobowe w czasie niezbędnym do zrealizowania celu, maksymalnie przez okres 3 lat oraz przez czas, w jakim możliwe jest dochodzenie roszczeń w związku z wykonaniem umowy zawartej na skutek transakcji, maksymalnie 3 lat od dnia dokonania transakcji. Podstawę przetwarzania danych stanowi ART. 6. Pkt 1 LIT. B ) I C. ) RODO.
                            </li>
                        </TextListOrd>
                    </li>
                    <li>
                        Twoje prawa
                        <TextContent>
                        Gwarantujemy spełnienie Twoich praw wynikających z ogólnego rozporządzenia o ochronie danych.Pamiętaj, że w stosunku do wszystkich przekazanych nam danych osobowych masz prawo żądania dostępu do swoich danych osobowych, ich sprostowania, usunięcia lub ograniczenia przetwarzania, sprzeciwu, a także prawo do przenoszenia tych danych i wniesienia skargi do organu nadzorczego.
                        </TextContent>
                        <TextContent>
                        Możesz skontaktować się z nami pod adresem e-mail:<PrivacyLink href="mailto:biuro@ogrody-wlkp.pl">biuro@ogrody-wlkp.pl</PrivacyLink>
                        </TextContent>
                    </li>
                </TextListOrd>
            </Container>
        </StyledSection>
        <InfoNav/>
        <Footer />
    </>
  )
}

export default Privacy
