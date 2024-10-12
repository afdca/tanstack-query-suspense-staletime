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
