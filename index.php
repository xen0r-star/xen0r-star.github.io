<!DOCTYPE html>
<html lang="fr-FR">

<head>
    <meta charset="UTF-8">
    <title>F.B | Accueil</title>
    <link rel="stylesheet" href="css/General.css">
    <link rel="icon" href="image\F-remove.png">

</head>

<body>

    <header>
        <ul>
            <li class="photo"><img src="image\f.b.png" width="auto" height="50px" alt="F.B. logo"></li>
            <li class="accueil_page"><a href="index.html">ACCUEIL</a></li>
            <li class="projet"><a href="page/projet/projet.html">PROJET</a></li>
            <li class="apropos"><a href="page/apropos/apropos.html">A PROPOS</a></li>
            <li class="contact"><a href="page/contact/contact.html">CONTACT</a></li>
            <!-- <li class="union_barre"><img src="image/Union.png" width="35px" class="union_barre_image" onclick="union_barre_boutton()" id="animation_barre"></li> -->
        </ul>
        <div class="ligne"></div>
    </header>

    <section>
        <h1 class="achievements">Achievements</h1>
        <div class="ligne_sous_titre"></div>

        <div class="scrollmenu">
            <div class="fond_scrollmenu" id="fond_scrollmenu_px">
                <a href="">
                    <div class="carre_scrollmenu" style="left: 0px;"></div>
                    <!-- le px du jour -135 ( jour 5 ⇒ 125 - 135 ) -->
                </a>
                <a href="">
                    <div class="carre_scrollmenu" style="left: 0px;"></div>
                </a>
                <a href="">
                    <div class="carre_scrollmenu" style="left: 0px;"></div>
                </a>
                <a href="">
                    <div class="carre_scrollmenu" style="left: 0px;"></div>
                </a>
            </div>
        </div>
    </section>

    <section>
        <h1 class="competence">Compétence</h1>
        <div class="ligne_sous_titre"></div>

        <div class="rectangle5">
            <div class="ligne_rectangle5"></div>
            <table class="accuiel_competence">
                <tr>
                    <td rowspan="4" class="rond_principal_td">
                        <div class="rond_principal_html" id="element1"><span class="text_principal_1"><strong>HTML</strong></span><br><span class="text_principal_2"><strong>75%</strong></span></div>
                        <div class="rond_principal_css" id="element2"><span class="text_principal_1"><strong>CSS</strong></span><br><span class="text_principal_2"><strong>75%</strong></span></div>
                        <div class="rond_principal_cpp" id="element3"><span class="text_principal_1"><strong>C++</strong></span><br><span class="text_principal_2"><strong>75%</strong></span></div>
                        <div class="rond_principal_ordinateur" id="element4"><span class="text_principal_1"><strong>Web  Disign</strong></span><br><span class="text_principal_2"><strong>75%</strong></span></div>
                        <div class="rond_principal_mysql" id="element5"><span class="text_principal_1"><strong>Mysql</strong></span><br><span class="text_principal_2"><strong>75%</strong></span></div>
                        <div class="rond_principal_php" id="element6"><span class="text_principal_1"><strong>PHP</strong></span><br><span class="text_principal_2"><strong>75%</strong></span></div>
                    </td>
                    <td class="rond_secondair_td">
                        <div class="bouton_1" onclick="bouton_1()"></div>
                        <div class="rond_1"><img src="image/html.png" height="80px" class="img_rond_1"></div>
                    </td>
                    <td class="rond_secondair_td">
                        <div class="bouton_2" onclick="bouton_2()"></div>
                        <div class="rond_2"><img src="image/css.png" height="80px" class="img_rond_2"></div>
                    </td>
                    <td class="rond_secondair_td">
                        <div class="bouton_3" onclick="bouton_3()"></div>
                        <div class="rond_3"><img src="image/cpp.png" height="80px" class="img_rond_3"></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="rond_text"><strong>HTML</strong></div>
                    </td>
                    <td>
                        <div class="rond_text"><strong>CSS</strong></div>
                    </td>
                    <td>
                        <div class="rond_text"><strong>C++</strong></div>
                    </td>
                </tr>
                <tr>
                    <td class="rond_secondair_td">
                        <div class="bouton_4" onclick="bouton_4()"></div>
                        <div class="rond_4"><img src="image/ordinateur.png" height="80px" class="img_rond_4"></div>
                    </td>
                    <td class="rond_secondair_td">
                        <div class="bouton_5" onclick="bouton_5()"></div>
                        <div class="rond_5"><img src="image/mysql.png" height="80px" class="img_rond_5"></div>
                    </td>
                    <td class="rond_secondair_td">
                        <div class="bouton_6" onclick="bouton_6()"></div>
                        <div class="rond_6"><img src="image/php.png" height="50px" class="img_rond_6"></div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="rond_text"><strong>Web Disign</strong></div>
                    </td>
                    <td>
                        <div class="rond_text"><strong>MySQL</strong></div>
                    </td>
                    <td>
                        <div class="rond_text"><strong>PHP</strong></div>
                    </td>
                </tr>
            </table>
        </div>
    </section>

    <!-- <section>
        <div class="cookie_fond">
            <table class="cookie_table">
                <tr>
                    <td rowspan="2"><img src="image/cookie.png" alt="image cookie" class="cookie_image"></td>
                    <td colspan="2"><span class="cookie_text">Ce site utilise des cookies pour vous assurer d’obtenir la
                            meilleure expérience sur notre site.</span></td>
                </tr>
                <tr>
                    <td><input type="button" class="cookie_bouton" onclick="verifierFormulaire()"
                            value="Accepter"></input></td>
                    <td><a href="" class="cookie_lien">En savoir plus</a></td>
                </tr>
            </table>
        </div>
    </section> -->

    <footer>
        <div class="copyright_ligne"></div>
        <div class="copyright_fond">
            <p class="copyright_text">Copyright © 2022 All Rights by Florian Berte</p>
            <span class="copyright_image">
                <a href=""><img src="image/github.png" alt="lien vers mon compte Github" width="50px"
                        class="copyright_image_2"></a>
                <a href=""><img src="image/instagram.png" alt="lien vers mon compte Instagram" width="50px"
                        class="copyright_image_2"></a>
                <a href=""><img src="image/tiktok.png" alt="lien vers mon compte Tik Tok" width="50px"
                        class="copyright_image_2"></a>
                <a href=""><img src="image/twitter.png" alt="lien vers mon compte Twitter" width="50px"
                        class="copyright_image_2"></a>
                <a href=""><img src="image/gmail.png" alt="lien vers mon adresse Gmail" width="50px"
                        class="copyright_image_2"></a>
            </span>
        </div>
    </footer>

    <script src="index_code.js"></script>
</body>

</html>