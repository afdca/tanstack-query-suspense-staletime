import { useSuspenseQuery } from "@tanstack/react-query"
import { Suspense } from "react"
import "./App.css"

export function App() {
  useSuspenseQuery({
    queryFn: () => true,
    queryKey: ["staleTime function"],
    staleTime: () => Infinity, // Function
  })

  useSuspenseQuery({
    queryFn: () => true,
    queryKey: ["staleTime number"],
    staleTime: Infinity, // Number
  })

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h2>Instructions</h2>
      <ul>
        <li>Open the Tanstack Query devtools on the bottom right</li>
        <li>
          Notice the "<em>staleTime number</em>" query <u>never goes stale</u> <br />
          (as expected because its staleTime equals{" "}
          <em>
            <code>Infinity</code>
          </em>
          )
        </li>
        <li>
          Notice the "<em>staleTime function</em>" query <u>goes stale after 1 second</u> <br />
          despite its staleTime being equal to{" "}
          <em>
            <code>() &rarr; Infinity</code>
          </em>
        </li>
      </ul>
    </Suspense>
  )
}
