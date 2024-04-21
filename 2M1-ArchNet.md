# 2M - Projet Micro-serre d'intérieure automatisée - Architecture des réseaux informatiques

## @showdialog

![Logo H@rmonia](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Harmonia_v4.jpg?raw=true)
![Atelier 1](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive14.jpeg?raw=true)

ℹ️ **CONSIGNES IMPORTANTES**
> - 🗂️ **Sauvegardez TOUS vos documents**  dans votre répertoire de travail de groupe sur **OneDrive**.
> - 📝 **Prenez des notes** (sous forme manuscrite ou numérique, peu importe comment, **mais prenez des notes !!!** 😂)
> - 🛤️ **Organisez** et  **planifiez** votre travail de groupe. (Qui ? Fait quoi ? quand ?) 
> - 🧑‍🧑‍🧒 **Communiquez** entre vous.
> - 🧭 **Laissez des traces de **TOUTES vos expérimentations** en prenant des **notes**, des **photos** (avec votre téléphone portable) ou des **captures d'écran**.
> - ⚠️ Mettez à jour le journal de bord tout au long de **CHAQUE séance**.⚠️
> - 🆘 Si vous êtes **perdu** servez-vous des **guides** et des **ressources** qui sont à votre disposition dans le **répertoire du projet** sur **OneDrive**.

## @showdialog

# Récolte de données via USB
Programme qui envoit continuellement la **température** et la **luminosité** sur le port série (**USB**) afin de pouvoir les **visualiser** et les **sauvegarder** sur le PC.

**Remarque**
- La **température** et la **luminosité** proviennent de deux **variables prédéfinies** dans le Micro:Bit et contiennent les **valeurs mesurées** par les **capteurs internes** correspondants du Micro:Bit (CPU, matrice de leds)

## Étape 1/3 - Programmer le Micro:Bit @showhint
### Explications sur le programme
Les données sont envoyées chaque seconde à l'aide de la boucle ``||basic:toujours||`` (Base).
La **fonction** ``||Communication Série:série écrire valeur||`` (Communication Série) et le bloc ``||Entrée:température (°C)||`` (Entrée) sert à envoyer la **température** sur le port série. (**USB**) 
La **fonction** ``||Communication Série:série écrire valeur||`` (Communication Série) et le bloc ``||Entrée:niveau d'intensité lumineuse||`` (Entrée) sert à envoyer la **luminosité** sur le port série. (**USB**)

```blocks
basic.forever(function () {
    serial.writeValue("temperature", input.temperature())
    serial.writeValue("luminosite", input.lightLevel())
    basic.pause(1000)
})
```

> - 🆘 Si vous ne parvenez pas à faire l'exercice, vous pouvez regarder la [vidéo YouTube du RECIT](https://youtu.be/imzGdgKm4W0?si=EPmg_eWGlHzvkHMw) pour vous aider.

## Étape 2/3 - Transférer le programme. Visualiser et sauvegarder les données sur le PC @showhint
Pour visualiser et sauvarger les données sur le PC, il faut :
> 1. Transférer le programme sur le Micro:Bit.
> 2. Cliquer sur le bouton **Afficher les données Appareil** pour visualiser les données.
> 3. Sauvegarder les données dans un fichier .csv 

![Téléchargez le programme. Visualisez et sauvegardez les données sur le PC](https://github.com/ph3n4t3s/2m1-archnet/blob/master/img/Record1.gif?raw=true) 

## Étape 3/3 - Documenter
> 1. Sauvegardez **TOUTES** les traces de votre expérimentation. (vos **notes**, les **données récoltées** et vos **copies d'écran**)
> 2. Mettez à jour le journal de bord du projet.

# Récolte de données avec le capteur M5STACK EARTH
Ce capteur permet de mesurer l'humidité du sol.

![Branchement du capteur d'humidité (sol) - M5STACK EARTH](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive29.jpeg?raw=true)

## Étape 1/3 - Programmer le Micro:Bit @showhint
### Explications sur le programme

```blocks
basic.forever(function () {
    serial.writeValue("D Out", pins.digitalReadPin(DigitalPin.P0))
    serial.writeValue("A Out", pins.analogReadPin(AnalogPin.P0))
    basic.pause(100)
})
```

## Étape 2/3 - Transférer le programme. Visualiser et sauvegarder les données sur le PC @showhint
Pour visualiser et sauvarger les données sur le PC, il faut :
> 1. Transférer le programme sur le Micro:Bit.
> 2. Cliquer sur le bouton **Afficher les données Appareil** pour visualiser les données.
> 3. Sauvegarder les données dans un fichier .csv 

![Téléchargez le programme. Visualisez et sauvegardez les données sur le PC](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Record2.gif?raw=true)

## Étape 3/3 - Documenter
> 1. Sauvegardez **TOUTES** les traces de votre expérimentation. (vos **notes**, les **données récoltées** et vos **copies d'écran**)
> 2. Mettez à jour le journal de bord du projet.

# Récolte de données avec le capteur DHT11
Ce capteur permet de mesurer la température et l'humidité de l'air.

![Branchement du capteur de température et d'humidité (air) - DHT11](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive30.jpeg?raw=true)

## Étape 1/3 - Programmer le Micro:Bit @showhint
### Explications sur le programme

## Étape 2/3 - Transférer le programme. Visualiser et sauvegarder les données sur le PC @showhint
Pour visualiser et sauvarger les données sur le PC, il faut :
> 1. Transférer le programme sur le Micro:Bit.
> 2. Cliquer sur le bouton **Afficher les données Appareil** pour visualiser les données.
> 3. Sauvegarder les données dans un fichier .csv 

## Étape 3/3 - Documenter
> 1. Sauvegardez **TOUTES** les traces de votre expérimentation. (vos **notes**, les **données récoltées** et vos **copies d'écran**)
> 2. Mettez à jour le journal de bord du projet.

# Gestion de la couleur et de l'intensité de la led RGB
La led RGB permet d'être contrôlée par les trois composantes Rouge-Vert-Bleu.

![Branchement de l'actuateur - Led RGB](https://github.com/ph3n4t3s/1m1-archsys/blob/master/img/Diapositive31.jpeg?raw=true)

## Étape 1/3 - Programmer le Micro:Bit @showhint
### Explications sur le programme

## Étape 2/3 - Transférer le programme. Visualiser et sauvegarder les données sur le PC @showhint
Pour visualiser et sauvarger les données sur le PC, il faut :
> 1. Transférer le programme sur le Micro:Bit.
> 2. Cliquer sur le bouton **Afficher les données Appareil** pour visualiser les données.
> 3. Sauvegarder les données dans un fichier .csv 

## Étape 3/3 - Rédaction du rapport de l'atelier
> 1. Sauvegardez **TOUTES** les traces de votre expérimentation. (vos **notes**, les **données récoltées** et vos **copies d'écran**)
> 2. Mettez à jour le journal de bord du projet.






---
___
# OLD
## Partie #1/3 - Comment une donnée est-elle transmise entre un émetteur et un récepteur ?

### Thématiques
1. Type de connexion (niveau physique) 
2. Communication point à point 
3. Communication multi-point
4. Topologie réseau 


### Communication point à point 
Avant de parler de communication il est nécessaire de définir support par lequel l'information est transportée/transmise. 
Il s'agit définir le __niveau physique__ de la connexion. 

__Question__ 

Citez des exemples de support/média que vous utilisez pour transporter des données ? (Type de réseau)

- Bluetooth 
- Wifi
- Câble Ethernet 
- Fibre Optiques
- Micro-Ondes
- Satellites 

Prenons l'exemple d'une liaison Bluetooth pour illustrer ce qui est nécessaire pour assurer l'échange d'information entre un émetteur et un récepteur. 



1. [Vidéo YouTube - Collecte de données avec le MicroBit](https://youtu.be/imzGdgKm4W0?si=FBLzMVgMT84QMNZi)

2. [Vidéo YouTube - Collecte de données via Bluetooth](https://youtu.be/r5vyFl2HfFw?feature=shared)

3. [Vidéo YouTube - Programmation émetteur-récepteur](https://youtu.be/y4XS6JIwdIQ?feature=shared)

4. Protocole [ARP (Address Resolution Protocol)](wikipedia)

### Communication multi-point

__Question__
Quels sont les problèmes qui peuvent apparaître lors de communications multiples? 


### Topologie réseau

__Question__
Faites des recherches et expliquez ce qu'est la topologie d'un réseau.

---
# ANNEXES
## Index des ressources
> - [Présentation du projet]()
> - [Cahier des charges du projet]()
> - [Guide à agir et penser]()
> - [Guide des outils]()
> - [Canevas pour les rapports d'atelier]()
> - [Canevas pour le projet]()
> - [Cavenas pour le journal de bord]()

## Index des outils
> - [OneDrive]() - Stockage
> - [Word]() - Traitement de texte
> - [Excel]() - Traitement de donnée
> - [PowerPoint]() - Présentation - Illustration
> - [Outlook]() - Messagerie
> - [Whiteboard]() - Tableau blanc coopératif
> - [Draw.io]() - Illustration
 

—-
### Exemple de code block
```blocks
Exemple de code block
```

### Exemple de code Python
```python
function ping () {
    radio.sendString(« PING » + « , » + « 0 » + « , » + («  » + control.deviceSerialNumber()))
}
function LedSwitch () {
    if (LedStatus == 0) {
        LedStatus = 255
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else {
        LedStatus = 0
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
}
```