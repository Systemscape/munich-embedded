+++
title = "Newsletter"
template = "newsletter.html"
+++

<section class="bg-blue-900 text-white py-16">
    <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
            <h1>Newsletter</h1>
            <p class="text-lg text-blue-100">Four emails a year about Munich Embedded. Unsubscribe in one click.</p>
            <p class="mt-4"><a href="https://buttondown.com/munich_embedded/archive" target="_blank" class="text-lg text-white underline underline-offset-4 hover:text-orange-400">Read previous issues</a></p>
        </div>
        <form action="https://buttondown.com/api/emails/embed-subscribe/munich_embedded" method="post" class="embeddable-buttondown-form mx-auto mt-10 max-w-xl">
            <label for="bd-email" class="block text-sm font-medium text-blue-100 mb-2">Email address</label>
            <div class="flex flex-col sm:flex-row gap-3">
                <input type="email" name="email" id="bd-email" required placeholder="name@example.com" class="grow min-w-0 py-3 text-lg" />
                <input type="submit" value="Subscribe" class="orange-button w-auto shrink-0 border-0 cursor-pointer" />
            </div>
            <label for="consent" class="mt-5 flex items-start gap-3 text-xs leading-relaxed text-blue-200">
                <input type="hidden" name="metadata__consent" value="False" />
                <input type="checkbox" name="metadata__consent" id="consent" value="True" required class="mt-0.5 h-4 w-4 shrink-0 p-0 accent-orange-500" />
                <span>Yes, I would like to receive the free Munich Embedded newsletter from Systemscape GmbH. It is sent quarterly and provides information about current topics in embedded systems. I can revoke my consent to the storage of my email address and its use for sending the newsletter at any time, e.g. via the &quot;Unsubscribe&quot; link in the newsletter or by email. Buttondown is used as newsletter software. Buttondown measures whether and when an email is opened and which links are clicked; this analysis can be linked to my email address. Further information can be found in our <a href="/en/privacy" class="text-white underline">Privacy Policy</a>. By checking this box, I confirm that I have read and agree to this information as well as the privacy policy.</span>
            </label>
        </form>
    </div>
</section>

<section class="bg-white py-16">
    <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto text-gray-700">
            <h2 class="mt-0">What is in the newsletter</h2>
            <ul class="text-lg">
                <li>When the call for papers opens and how to submit a talk.</li>
                <li>When tickets go on sale.</li>
                <li>The programme, as soon as the talks are confirmed.</li>
                <li>What else is happening in the embedded scene around Munich.</li>
            </ul>
            <p class="mt-8 text-sm text-gray-500"><a href="https://buttondown.com/refer/munich_embedded" target="_blank">Powered by Buttondown.</a></p>
        </div>
    </div>
</section>
