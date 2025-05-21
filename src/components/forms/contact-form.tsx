
"use client";

import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import { sendContactEmailAction, type ContactFormSubmissionState } from "@/actions/send-contact-email";

const initialState: ContactFormSubmissionState = {
  message: '',
  status: 'idle',
  errors: {},
  submittedData: { name: '', email: '', message: ''}, // Initialize for defaultValue
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-all" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Send Message
        </>
      )}
    </Button>
  );
}

export default function ContactForm() {
  const [formState, formAction] = useFormState(sendContactEmailAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formState.status === 'success') {
      toast({
        title: "Message Sent!",
        description: formState.message,
        variant: "default",
      });
      formRef.current?.reset();
       // Manually clear state related to submittedData for next submission if needed,
       // though formRef.current.reset() handles visual clearing.
       // For a true reset of formState to initial for subsequent submissions without page reload,
       // this would need more complex state management or a key prop on the form.
    } else if (formState.status === 'error') {
      if (formState.errors?._form) {
         toast({
            title: "Submission Error",
            description: formState.errors._form.join(', '),
            variant: "destructive",
        });
      } else if (formState.message && !formState.errors?.name && !formState.errors?.email && !formState.errors?.message) {
        // Show a general error toast if there's a message but no specific field errors
        toast({
          title: "Error",
          description: formState.message,
          variant: "destructive",
        });
      }
      // Field-specific errors are displayed below inputs, no separate toast for each.
    }
  }, [formState, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="e.g., Jane Doe"
          defaultValue={initialState.submittedData?.name} // Use initial state for default or controlled if needed
          aria-required="true"
          aria-invalid={!!formState.errors?.name}
          aria-describedby="name-error"
          className={formState.errors?.name ? "border-destructive" : ""}
        />
        {formState.errors?.name && (
          <p id="name-error" className="text-sm font-medium text-destructive mt-1">
            {formState.errors.name.join(", ")}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          defaultValue={initialState.submittedData?.email}
          aria-required="true"
          aria-invalid={!!formState.errors?.email}
          aria-describedby="email-error"
          className={formState.errors?.email ? "border-destructive" : ""}
        />
        {formState.errors?.email && (
          <p id="email-error" className="text-sm font-medium text-destructive mt-1">
            {formState.errors.email.join(", ")}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project, ask a question, or request a consultation..."
          className={`min-h-[120px] resize-none ${formState.errors?.message ? "border-destructive" : ""}`}
          defaultValue={initialState.submittedData?.message}
          aria-required="true"
          aria-invalid={!!formState.errors?.message}
          aria-describedby="message-error"
        />
        {formState.errors?.message && (
          <p id="message-error" className="text-sm font-medium text-destructive mt-1">
            {formState.errors.message.join(", ")}
          </p>
        )}
      </div>
      
      {/* Display general form error message, if not tied to specific fields and not already toasted */}
      {formState.status === 'error' && formState.errors?._form && (
         <p className="text-sm font-medium text-destructive text-center">
            {formState.errors._form.join(", ")}
          </p>
      )}
      {formState.status === 'error' && formState.message && !formState.errors && (
         <p className="text-sm font-medium text-destructive text-center">
            {formState.message}
          </p>
      )}
      <SubmitButton />
    </form>
  );
}
