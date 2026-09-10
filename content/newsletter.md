+++
title = "Newsletter"
template = "newsletter.html"
+++

<section class="bg-blue-900 text-white py-16">
    <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
            <h1>Newsletter</h1>
            <p class="text-lg text-blue-100">Viermal im Jahr eine E-Mail zur Munich Embedded. Abmelden mit einem Klick.</p>
            <p class="mt-4"><a href="https://buttondown.com/munich_embedded/archive" target="_blank" class="text-lg text-white underline underline-offset-4 hover:text-orange-400">Frühere Ausgaben lesen</a></p>
        </div>
        <form action="https://buttondown.com/api/emails/embed-subscribe/munich_embedded" method="post" class="embeddable-buttondown-form mx-auto mt-10 max-w-xl">
            <label for="bd-email" class="block text-sm font-medium text-blue-100 mb-2">E-Mail-Adresse</label>
            <div class="flex flex-col sm:flex-row gap-3">
                <input type="email" name="email" id="bd-email" required placeholder="name@beispiel.de" class="grow min-w-0 py-3 text-lg" />
                <input type="submit" value="Abonnieren" class="orange-button w-auto shrink-0 border-0 cursor-pointer" />
            </div>
            <label for="consent" class="mt-5 flex items-start gap-3 text-xs leading-relaxed text-blue-200">
                <input type="hidden" name="metadata__consent" value="False" />
                <input type="checkbox" name="metadata__consent" id="consent" value="True" required class="mt-0.5 h-4 w-4 shrink-0 p-0 accent-orange-500" />
                <span>Ja, ich möchte den kostenlosen Munich Embedded Newsletter der Systemscape GmbH erhalten. Er erscheint vierteljährlich und informiert über aktuelle Themen aus dem Embedded-Bereich. Ich kann meine Einwilligung in die Speicherung meiner E-Mail-Adresse und deren Nutzung zum Versand des Newsletters jederzeit widerrufen, z.&nbsp;B. über den Abmeldelink im Newsletter oder per E-Mail. Als Newsletter-Software wird Buttondown eingesetzt. Buttondown misst, ob und wann eine E-Mail geöffnet und welche Links angeklickt werden; diese Auswertung kann meiner E-Mail-Adresse zugeordnet werden. Weitere Informationen finden Sie in unserer <a href="/privacy" class="text-white underline">Datenschutzerklärung</a>. Mit dem Setzen des Hakens bestätige ich, dass ich diese Hinweise und die Datenschutzerklärung gelesen habe und ihnen zustimme.</span>
            </label>
        </form>
    </div>
</section>

<section class="bg-white py-16">
    <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto text-gray-700">
            <h2 class="mt-0">Was im Newsletter steht</h2>
            <ul class="text-lg">
                <li>Wann der Call for Papers öffnet und wie Sie einen Vortrag einreichen.</li>
                <li>Wann die Tickets in den Verkauf gehen.</li>
                <li>Das Programm, sobald die Vorträge feststehen.</li>
                <li>Was sonst in der Embedded-Szene rund um München passiert.</li>
            </ul>
            <p class="mt-8 text-sm text-gray-500"><a href="https://buttondown.com/refer/munich_embedded" target="_blank">Powered by Buttondown.</a></p>
        </div>
    </div>
</section>
