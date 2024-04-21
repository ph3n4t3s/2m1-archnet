# 2M - Projet Micro-serre d'intérieure automatisée - Architecture des réseaux informatiques

## @showdialog

![Logo H@rmonia](https://github.com/ph3n4t3s/2m1-archnet/blob/master/img/Harmonia_v4.jpg?raw=true)
![Atelier 1](https://github.com/ph3n4t3s/2m1-archnet/blob/master/img/Diapositive14.jpeg?raw=true)

ℹ️ **CONSIGNES IMPORTANTES**
> - 🗂️ **Sauvegardez TOUS vos documents**  dans votre répertoire de travail de groupe sur **OneDrive**.
> - 📝 **Prenez des notes** (sous forme manuscrite ou numérique, peu importe comment, **mais prenez des notes !!!** 😂)
> - 🛤️ **Organisez** et  **planifiez** votre travail de groupe. (Qui ? Fait quoi ? quand ?) 
> - 🧑‍🧑‍🧒 **Communiquez** entre vous.
> - 🧭 **Laissez des traces de **TOUTES vos expérimentations** en prenant des **notes**, des **photos** (avec votre téléphone portable) ou des **captures d'écran**.
> - ⚠️ Mettez à jour le journal de bord tout au long de **CHAQUE séance**.⚠️
> - 🆘 Si vous êtes **perdu** servez-vous des **guides** et des **ressources** qui sont à votre disposition dans le **répertoire du projet** sur **OneDrive**.

## @showdialog

# Récolte de données via le port Série (**USB**)
Le programme envoit les données (sous forme key/value) sur le port série (**USB**) afin de pouvoir les **visualiser** et les **sauvegarder** sur le PC.
> - Si la touche **A** est pressée, le programme envoit la valeur **1**.
> - Si la touche **B** est pressée, le programme envoit la valeur **2**.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    serial.writeValue("touche", 1)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    serial.writeValue("touche", 2)
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
})
```

### Chargement du code et test
![Test1](https://github.com/ph3n4t3s/2m1-archnet/blob/master/img/Record3.gif)

## Communication Bluetooth émetteur/récepteur @showhint
Le programme sur l'émetteur envoit sur le port Série et via Bluetooth.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    serial.writeValue("touche", 1)
    radio.sendValue("touche", 1)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    serial.writeValue("touche", 2)
    radio.sendValue("touche", 2)
})
radio.setGroup(10)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
})
```

## Le récepteur

```blocks
radio.onReceivedValue(function (name, value) {
    if (value == 1) {
        basic.showString("A")
    } else if (value == 2) {
        basic.showString("B")
    }
})
radio.setGroup(10)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
})
```

ATTENTION : Fixer le numéro du groupe Bluetooth en accord avec votre numéro de groupe.


## Documenter
> 1. Sauvegardez **TOUTES** les traces de votre expérimentation. (vos **notes**, les **données récoltées** et vos **copies d'écran**)
> 2. Mettez à jour le journal de bord du projet.


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