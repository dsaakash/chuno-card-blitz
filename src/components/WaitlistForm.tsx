
import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Form schema using zod for validation
const waitlistFormSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phoneNumber: z.string().optional(),
  ageGroup: z.enum(["under18", "18-24", "25-34", "35-44", "45plus"]),
  gamingPlatforms: z.array(z.string()).min(1, { message: "Please select at least one platform." }),
  gamingFrequency: z.enum(["daily", "weekly", "occasionally", "rarely"]),
  recentGames: z.array(z.string()),
  otherRecentGames: z.string().optional(),
  keepPlaying: z.array(z.string()),
  otherKeepPlaying: z.string().optional(),
  desiredFeatures: z.array(z.string()),
  otherDesiredFeatures: z.string().optional(),
  specificFeature: z.string().optional(),
  earlyTester: z.enum(["yes", "no"]),
  contactPreference: z.array(z.string()).min(1, { message: "Please select at least one contact method." }),
  wouldRefer: z.enum(["yes", "no", "maybe"]),
  friendEmail: z.string().email({ message: "Please enter a valid email address." }).optional(),
});

type WaitlistFormValues = z.infer<typeof waitlistFormSchema>;

const WaitlistForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { toast } = useToast();
  
  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      ageGroup: "25-34",
      gamingPlatforms: [],
      gamingFrequency: "occasionally",
      recentGames: [],
      keepPlaying: [],
      desiredFeatures: [],
      earlyTester: "yes",
      contactPreference: ["email"],
      wouldRefer: "maybe",
    },
  });

  function onSubmit(data: WaitlistFormValues) {
    console.log(data);
    toast({
      title: "Waitlist submission successful!",
      description: "Thank you for your interest in Chuno. We'll keep you updated!",
    });
    onClose();
  }

  const gamingPlatforms = [
    { id: "android", label: "Android" },
    { id: "ios", label: "iOS" },
    { id: "web", label: "Web Browser" },
    { id: "new", label: "Not a gamer yet, curious to try" },
  ];

  const recentGames = [
    { id: "uno", label: "UNO" },
    { id: "ludo", label: "Ludo King" },
    { id: "pool", label: "8 Ball Pool" },
    { id: "teenpatti", label: "Call Break / Teen Patti" },
    { id: "monopoly", label: "Monopoly" },
  ];

  const keepPlayingFactors = [
    { id: "friends", label: "Fun with friends" },
    { id: "rules", label: "Easy rules" },
    { id: "fast", label: "Fast matches" },
    { id: "customization", label: "Customization" },
    { id: "leaderboards", label: "Leaderboards" },
    { id: "rewards", label: "Rewards or Coins" },
  ];

  const desiredFeatures = [
    { id: "private-rooms", label: "Private Rooms with Friends" },
    { id: "quick-match", label: "Quick Match with Random Players" },
    { id: "tournaments", label: "Tournaments & Leaderboards" },
    { id: "avatar", label: "Avatar Customization" },
    { id: "chat", label: "In-Game Chat" },
    { id: "skins", label: "Card Skins / Themes" },
    { id: "xp", label: "XP & Badge System" },
    { id: "history", label: "Match History / Stats" },
    { id: "challenge", label: "Challenge Friends" },
    { id: "spectator", label: "Spectator Mode" },
  ];

  const contactPreferences = [
    { id: "email", label: "Email" },
    { id: "sms", label: "SMS" },
    { id: "whatsapp", label: "WhatsApp" },
    { id: "discord", label: "Discord" },
    { id: "social", label: "I'll follow on social media" },
  ];

  return (
    <div className="max-h-[80vh] overflow-y-auto px-1 py-2">
      <h2 className="text-2xl font-bold mb-4">✅ Chuno Waitlist & Feature Suggestion Form</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Section 1: Basic Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Section 1: Basic Info</h3>
            
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 9876543210" {...field} />
                  </FormControl>
                  <FormDescription>For early access SMS</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="ageGroup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age Group</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your age group" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="under18">Under 18</SelectItem>
                      <SelectItem value="18-24">18-24</SelectItem>
                      <SelectItem value="25-34">25-34</SelectItem>
                      <SelectItem value="35-44">35-44</SelectItem>
                      <SelectItem value="45plus">45+</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="gamingPlatforms"
              render={() => (
                <FormItem>
                  <div className="mb-2">
                    <FormLabel>Where do you usually play games?</FormLabel>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {gamingPlatforms.map((platform) => (
                      <FormField
                        key={platform.id}
                        control={form.control}
                        name="gamingPlatforms"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={platform.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(platform.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, platform.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== platform.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="cursor-pointer font-normal">
                                {platform.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          {/* Section 2: Gaming Behavior */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Section 2: Gaming Behavior</h3>
            
            <FormField
              control={form.control}
              name="gamingFrequency"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>How often do you play card or casual games?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="daily" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Daily
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="weekly" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Weekly
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="occasionally" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Occasionally
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="rarely" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Rarely
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="recentGames"
              render={() => (
                <FormItem>
                  <div className="mb-2">
                    <FormLabel>Which games have you played recently?</FormLabel>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {recentGames.map((game) => (
                      <FormField
                        key={game.id}
                        control={form.control}
                        name="recentGames"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={game.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(game.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, game.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== game.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="cursor-pointer font-normal">
                                {game.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormField
                    control={form.control}
                    name="otherRecentGames"
                    render={({ field }) => (
                      <FormItem className="mt-2">
                        <FormLabel>Others:</FormLabel>
                        <FormControl>
                          <Input placeholder="Other games you've played..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="keepPlaying"
              render={() => (
                <FormItem>
                  <div className="mb-2">
                    <FormLabel>What makes you keep playing a game?</FormLabel>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {keepPlayingFactors.map((factor) => (
                      <FormField
                        key={factor.id}
                        control={form.control}
                        name="keepPlaying"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={factor.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(factor.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, factor.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== factor.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="cursor-pointer font-normal">
                                {factor.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormField
                    control={form.control}
                    name="otherKeepPlaying"
                    render={({ field }) => (
                      <FormItem className="mt-2">
                        <FormLabel>Other:</FormLabel>
                        <FormControl>
                          <Input placeholder="Other factors that keep you playing..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </FormItem>
              )}
            />
          </div>
          
          {/* Section 3: Feature Wishlist */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Section 3: Feature Wishlist for Chuno v1</h3>
            
            <FormField
              control={form.control}
              name="desiredFeatures"
              render={() => (
                <FormItem>
                  <div className="mb-2">
                    <FormLabel>Which of these features would you love to see in Chuno?</FormLabel>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {desiredFeatures.map((feature) => (
                      <FormField
                        key={feature.id}
                        control={form.control}
                        name="desiredFeatures"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={feature.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(feature.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, feature.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== feature.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="cursor-pointer font-normal">
                                {feature.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormField
                    control={form.control}
                    name="otherDesiredFeatures"
                    render={({ field }) => (
                      <FormItem className="mt-2">
                        <FormLabel>Others:</FormLabel>
                        <FormControl>
                          <Input placeholder="Other features you'd like to see..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="specificFeature"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Any specific feature you wish no one ever forgets to include in a game like this?</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Share your thoughts..."
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="earlyTester"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Would you like to be an early tester for Chuno?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-row space-x-4"
                    >
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="yes" />
                        </FormControl>
                        <FormLabel className="font-normal">Yes</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="no" />
                        </FormControl>
                        <FormLabel className="font-normal">No</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="contactPreference"
              render={() => (
                <FormItem>
                  <div className="mb-2">
                    <FormLabel>How should we reach you for updates?</FormLabel>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {contactPreferences.map((preference) => (
                      <FormField
                        key={preference.id}
                        control={form.control}
                        name="contactPreference"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={preference.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(preference.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, preference.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== preference.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="cursor-pointer font-normal">
                                {preference.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          {/* Section 4: Viral Boost */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Section 4: Viral Boost</h3>
            
            <FormField
              control={form.control}
              name="wouldRefer"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Would you refer Chuno to a friend if you liked it?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-row space-x-4"
                    >
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="yes" />
                        </FormControl>
                        <FormLabel className="font-normal">Yes</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="no" />
                        </FormControl>
                        <FormLabel className="font-normal">No</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="maybe" />
                        </FormControl>
                        <FormLabel className="font-normal">Maybe</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="friendEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Leave a friend's email to invite them early (optional):</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="friend@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="flex justify-end space-x-4 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-chuno-blue text-white">
              Submit Form
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default WaitlistForm;
