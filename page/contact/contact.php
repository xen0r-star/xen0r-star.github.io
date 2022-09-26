<!DOCTYPE html>
<html lang="fr-FR">

<head>
    <meta charset="UTF-8">
    <title>F.B | Contact</title>
    <link rel="stylesheet" href="../../css/General.css">
    <link rel="icon" href="..\..\image\F-remove.png">
    <script src="contact_code.js"></script>

    <a id='result'></a>
    <a id='result_2'></a>
    <a id='result_3'></a>
    <a id='result_4'></a>
    <a id='result_5'></a>

</head>

<body>
    <header>
        <ul>
            <li class="photo"><img src="../../image/f.b.png" width="auto" height="50px" alt="F.B. logo"></li>
            <li class="accueil"><a href="..\..\index.html">ACCUEIL</a></li>
            <li class="projet"><a href="..\projet\projet.html">PROJET</a></li>
            <li class="apropos"><a href="..\apropos\apropos.html">A PROPOS</a></li>
            <li class="contact_page"><a href="contact.html">CONTACT</a></li>
        </ul>
        <div class="ligne"></div>
    </header>
    
    <h2 class="text_contact">Mes réseaux sociaux</h2>
    <center>
        <table>
            <tr>
                <td class="image_contact_1"><a href="https://www.instagram.com" target="_blank"><img src="..\..\image\instagram.png" alt="Instagram" width="150px" height="150px"></a></td>
                <td class="image_contact_1"><a href="https://www.tiktok.com" target="_blank"><img src="..\..\image\tiktok.png" alt="Tik tok" width="150px" height="150px"></a></td>
                <td class="image_contact_1"><a href="https://github.com" target="_blank"><img src="..\..\image\github.png" alt="Github" width="150px" height="150px"></a></td>
            </tr>
        </table>
        <table>
            <tr>
                <td class="image_contact_1"><a href="https://twitter.com" target="_blank"><img src="..\..\image\twitter.png" alt="Twitter" width="150px" height="150px"></a></td>
                <td class="image_contact_1"><a href="https://www.google.com/intl/fr/gmail/about" target="_blank"><img src="..\..\image\gmail.png" alt="Gmail" width="150px" height="150px"></a></td>
            </tr>
        </table>  
    </center>
    <div class="ligne_sous_titre_contact"></div>

    <h2 class="text_contact">Message</h2>
    <center>
        <form autocomplete="off" method="post">
            <table>
                <tr>
                    <td class="text_message_1">Prénom</td>
                    <td class="text_message_1_1">Nom</td>
                </tr>
                <tr>
                    <td class="text_message_2"><input type="text" id="prenom" class="input_1"></td>
                    <td class="text_message_2"><input type="text" id="nom" class="input_2"></td>
                </tr>
                <tr>
                    <td class="text_message_1">Email</td>
                    <td class="text_message_1_1">Sujet</td>
                </tr>
                <tr>
                    <td class="text_message_2"><input type="email" id="email" class="input_1"></td>
                    <td class="text_message_2"><input type="text" id="sujet" class="input_2" minlength="100"></td>
                </tr>
                <tr>
                    <td class="text_message_3_1" colspan="2">Message</td>
                </tr>
                <tr>
                    <td class="text_message_3" colspan="2"><input type="text" id="message" class="input_message" minlength="1000"></td>
                </tr>
            </table>

            <script src="constant_code.js">
                

            </script>

            <input type="button" class="button_contact" onclick="verifierFormulaire()" value="Envoyer"></input>

        </form>
    </center>

    <footer>
        <div class="copyright_ligne"></div>
        <div class="copyright_fond">
            <p class="copyright_text">Copyright © 2022 All Rights by Florian Berte</p>
            <span class="copyright_image">
                <a href=""><img src="../../image/github.png" alt="lien vers mon compte Github" width="50px" class="copyright_image_2"></a>
                <a href=""><img src="../../image/instagram.png" alt="lien vers mon compte Instagram" width="50px" class="copyright_image_2"></a>
                <a href=""><img src="../../image/tiktok.png" alt="lien vers mon compte Tik Tok" width="50px" class="copyright_image_2"></a>
                <a href=""><img src="../../image/twitter.png" alt="lien vers mon compte Twitter" width="50px" class="copyright_image_2"></a>
                <a href=""><img src="../../image/gmail.png" alt="lien vers mon adresse Gmail" width="50px" class="copyright_image_2"></a>
            </span>
        </div>
    </footer>


</body>
</html>




<!-- ______________________________________________

faire en sorte que sa prend result1 - 5 et que sa mes dans result_6

faire que sa mes la barre rouge sans avoir appuie sur le boutton 
______________________________________________ -->