import { DefaultDocumentNodeResolver } from 'sanity/desk'
import { Iframe } from 'sanity-plugin-iframe-pane'
import { SanityDocument } from 'sanity'
export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
    S,
    { schemaType }
) => {
    if (schemaType === 'post') {
        return S.document().views([
            S.view.form(),
            S.view
                .component(Iframe)
                .options({
                    // Required: Accepts an async function
                    // OR a string
                    url: `http://localhost:3000/api/draft`,
                    // Optional: Set the default size
                    defaultSize: `desktop`, // default `desktop
                    // Optional: Add a reload button, or reload on new document revisions
                    reload: {
                        button: true, // default `undefined"
                    },
                    // Optional: Pass attributes to the underlying iframe element:
                    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
                    attributes: {},
                })
                .title("Preview"),
        ]);
    }
}