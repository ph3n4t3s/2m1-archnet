# 2M - Projet Micro-serre d'intérieure automatisée - Architecture des réseaux informatiques

## @showdialog

![Logo H@rmonia](https://github.com/ph3n4t3s/2m1-archnet/blob/master/img/Harmonia_v4.jpg?raw=true)
![Atelier 1](https://github.com/ph3n4t3s/2m1-archnet/blob/master/img/Diapositive14.jpeg?raw=true)

## @showdialog

ℹ️ **CONSIGNES IMPORTANTES**
> - 🗂️ **Sauvegardez TOUS vos documents**  dans votre répertoire de travail de groupe sur **OneDrive**.
> - 📝 **Prenez des notes** (sous forme manuscrite ou numérique, peu importe comment, **mais prenez des notes !!!** 😂)
> - 🛤️ **Organisez** et  **planifiez** votre travail de groupe. (Qui ? Fait quoi ? quand ?) 
> - 🧑‍🧑‍🧒 **Communiquez** entre vous.
> - 🧭 **Laissez des traces de **TOUTES vos expérimentations** en prenant des **notes**, des **photos** (avec votre téléphone portable) ou des **captures d'écran**.
> - ⚠️ Mettez à jour le journal de bord tout au long de **CHAQUE séance**.⚠️
> - 🆘 Si vous êtes **perdu** servez-vous des **guides** et des **ressources** qui sont à votre disposition dans le **répertoire du projet** sur **OneDrive**.

## Récolte de données via le port Série (**USB**) @showhint
Pour que le programme envoit chaque seconde via le port série **USB** , il faut utiliser la **fonction** ``||Communication Série:série écrire valeur||`` qui se trouve dans la catégorie **Communication Série** et la déposer dans la boucle toujours ``||basic:toujours||``. Ceci va définir le nom et la valeur mesurée. Nous trouverons les variables prédéfinies pour la température ``||Entrée:température (° C)||`` et et pour la luminosité ``||Entrée:niveau d'intensité lumineuse||`` dans la catégorie **Entrée**.

```blocks
basic.forever(function () {
    serial.writeValue("temperature", input.temperature())
    serial.writeValue("luminosite", input.lightLevel())
    basic.pause(1000)
})
```

### Chargement du code et tests
Téléchargez le code et testez en mettant votre doigt sur le microprocesseur pour faire monter la température, et utilisez la lampe de poche de votre téléphone pour illuminer la matrice de led pour faire monter la luminosité.
![ChargementCode](https://github.com/ph3n4t3s/2m1-archnet/blob/master/img/Record1.gif?raw=true)

## Communication Bluetooth émetteur/récepteur @showhint
- Si A est pressé
    Le programme sur l'émetteur affiche A et envoit touche 1 sur le port Série et via Bluetooth.
- Si B est pressé
    Le programme sur l'émetteur affiche B et envoit touche 2 sur le port Série et via Bluetooth.

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

![DémoCommunicationBluetooth](https://github.com/ph3n4t3s/2m1-archnet/blob/master/img/record4.gif?raw=true)

## Le récepteur @showhint
- Si reçoit touche 1, le programme affiche A.
- Si reçoit touche 2, le programme affiche B.

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

![DémoCommunicationBluetooth](https://github.com/ph3n4t3s/2m1-archnet/blob/master/img/record5.gif?raw=true)

**ATTENTION** : Fixer le numéro du groupe Bluetooth en accord avec votre numéro de groupe de travail.


## Communication Point à Point - Série et Bluetooth @showhint
Réalisez le programme de l'émetteur et du récepteur pour que :
- Lorsqu'on appuie sur le bouton A de l'émetteur, le récepteur envoit la température.
- Lorsqu'on appuie sur le bouton B de l'émetteur, le récepteur envoit le niveau de luminosité.
![Communication Point à Point](https://github.com/ph3n4t3s/2m1-archnet/blob/master/img/Dia26.gif?raw=true)
Selon le diagramme de flux suivant :
![Diagramme de flux](https://github.com/ph3n4t3s/2m1-archnet/blob/master/img/Dia27.gif?raw=true)

## Documenter
> 1. Sauvegardez les source de vos programmes.
> 2. Mettez à jour le **journal de bord** du groupe.
> 3. Sauvegardez **TOUTES** les traces de votre expérimentation. (vos **notes**, les **données récoltées** et vos **copies d'écran**)
> 4. Rédiger le **rapport d'atelier** (selon le canevas prévu)


